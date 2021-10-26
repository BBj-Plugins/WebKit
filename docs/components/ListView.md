# ListView 

## Usage Guideline
ListView expects a following data model - 
```
# ListDataModel
    - BBjString listPanelTitle$
    - BBjString databaseName$
    - BBjString tableName$

    - Boolean actionColumnStatus! = 1
    - BBjNumber rowLimit = -1

    - BBjVector columnMappings! = new BBjVector<ListColumnModel>()
        ## ListColumnModel
            - BBjString columnDisplayName$
            - BBjNumber columnPosition$
            - BBjString columnWidth$
            - Cell cellStructure!
                ### Cell
                    - BBjVector fields! = new BBjVector<Field>()
                        #### Field
                            - BBjString dataColumnName$
                            - BBjString dataColumnAlias$
                            - BBjString customCssClass$
```

It's easier to go `bottom-up` when wiring up the data-model. Here's a possible set of steps:
1. Create Fields:
   - Each Field is basically a representation of values from a specific database column.
   - Figure out which fields you want to show in the list view. For each field you have to specify what is the database `columnName` from where the field data will be
   populated.
   - you can also create custom column for each field. for example - suppose your database table has `first_name` and `last_name column` and may be you want to show a
       column of `display_name` by combining the `first_name` and `last_name` column. then you can give - `first_name + ' ' + last_name` as the `dataColumnName$`, and
       `ListView` will handle this by it's own. **IMPORTANT- you must give a column alias in `dataColumnAlias$` property if you provide a custom column like display_name, by default `dataColumnAlias$` is same as `dataColumnName$`**
   - you can also provide a custom css class, for a field. (Use case - may be you want to show this field with bold/italics)
       ```
        displayName_field! = new Field("FIRST_NAME + ' ' + LAST_NAME", "DISPLAYNAME"); REM custom column field

        id_field! = new Field("CUST_NUM", "ID")

        city_field! = new Field("CITY", "CITY")
        city_field!.setCustomCssClass("listSubtitleField") ; REM field with a custom css class

        addr_field! = new Field("BILL_ADDR1", "ADDRESS")
       ```

2. Create Cell:
    - Each Cell is comprised of one or more `Field(s)`
    - For each Cell, just create a `BBjVector` and push the `Field` objects you created in step #1, in each specific Cell
        ```
            REM create a vector
            firstColumnFields! = new BBjVector()

            REM push the fields you want to render in the vector
            firstColumnFields!.add(displayName_field!)
            firstColumnFields!.add(city_field!)

            REM initialize Cell, with vector of fields
            firstColumnCell! = new Cell(firstColumnFields!)

            REM same things, but Cell with just one field
            secondColumnFields! = new BBjVector()
            secondColumnFields!.add(id_field!)
            secondColumnCell! = new Cell(secondColumnFields!)
        ```

3. Create ColumnModel:
    - Each ColumnModel will represent properties of a column in the `ListView` and have properties like `position`, `display_name`, `width` and a `cellStructure`.
        `cellStructure` is basically a `Cell` object.

        ```
            REM create a column model object with column name and position
            firstColumn! = new ListColumnModel("Your Reference", 1)

            REM specify width of this column
            firstColumn!.setColumnWidth("50%")

            REM specify cellStructure
            firstColumn!.setCellStructure(firstColumnCell!)

            REM same thing for second column
            secondColumn! = new ListColumnModel("Customer ID", 2)
            secondColumn!.setColumnWidth("25%")
            secondColumn!.setCellStructure(secondColumnCell!)
        ```

4. Create ListDataModel:
    - This is the top-level class which will be passed to `ListView`. This class has the meta properties for the `ListView`, like `tableName$`, `databaseName$` etc. It
        also expects a `BBjVector` of all the `columnModels` you created in the step #3
    - Additionally, you can also specify `rowLimit`, which will basically retrieve a less number of rows from the database.
    - Another option you can give to this model is `actionColumnStatus`, By default `ListView` will have an action column on the right. if you don't want any action column in your list, you can disable it by setting the `actionColumnStatus = 0`
    
    ```

        REM create a listDataModel with databaseName, tableName etc
        declare ListViewModel listDataModel!
        listDataModel! = new ListViewModel("Customers")
        
        listDataModel!.setDatabaseName("ChileCompany")
        listDataModel!.setTableName("Customer")

        REM create a vector for column models
        declare BBjVector columnMappings!
        columnMappings! = new BBjVector()

        REM push the column models created in step #3 into the vector
        columnMappings!.add(firstColumn!)
        columnMappings!.add(secondColumn!)
        columnMappings!.add(thirdColumn!)

        REM hook up the column models vector to the listDataModel
        listDataModel!.setColumnMappings(columnMappings!)
    ```
