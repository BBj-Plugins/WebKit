# WebKit
Web Development Components for BBj DWC (only!)

Careful: Experimental work in progress!

# Folder Structure
```
css/ - application wide default themes
demo/ - example application
    - assets/ - demo specific assets like logo, images etc
    - <example-application>/
        - <example-application>.bbj 
        - <example-application>.css - example application related themes
framework/ - high level components like portals, panels, dialogs etc.
    - <component-name>/
        - <component-name>.bbj
        - <component-name>.css - component level styles
lib/
model/
util/ - utitlity modules like css loader, deploy scripts
widgets/
    - common/ - common widgets that are used by other widgets and framework like divider, icon etc.
        - <widget-name>/
            - <widget-name>.bbj
            - <widget-name>.css - widget level styles
    
    - <widget-name>/
        - <widget-name>.bbj
        - <widget-name>.css - widget level styles
```
# Theming Guideline
For custom theme implementation, follow this guideline [here](docs/theme-guideline.md)