# Basis Webkit Theming Guideline

### Installing Custom Theme

1. Go to [Export Theme (bbx.kitchen)](https://hot.bbx.kitchen/webapp/DWCThemeEditor) and modify your colors accordingly
2. Click the hamburger menu and this do the following:
    
    ![theme-guideline-img-1.png](https://github.com/BBj-Plugins/WebKit/blob/Update-gudlines-for-custom-theming/docs/assets/theme-guideline-img-1.png)
    
3. while exporting, make your selections like this

![theme-guideline-img-2.png](https://github.com/BBj-Plugins/WebKit/blob/Update-gudlines-for-custom-theming/docs/assets/theme-guideline-img-2.png)

1. In the demo folder, make a new folder for your company: Eg: `prodinDemo` and inside this create a `prodinDemo.bbj` file and `prodinDemo.css` put the code you have downloaded in the `css` file.
2. in `prodinDemo.bbj` load the theme life:
    
    ```jsx
    DynamicLoader.loadThemeFile("WebKit/demo/ProdinDemo/ProdinDemo.css")
    ```
    

### How Can I use Custom fonts?

If you need to any custom fonts make sure that you have loaded it before loading theme file: eg: for `lato`

```jsx
DynamicLoader.addStyleURL("https://fonts.googleapis.com/css?family=Lato")
```

then go the theme css file, eg: `prodinDemo.css` and modify bbj font family variables:

```css
/* TYPOGRAPHY */
/* ==================== */
--bbj-font-family-sans: 'Lato', -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
--bbj-font-family-mono: 'Lato', Menlo, Monaco, 'Courier New', monospace;
```

### How to use bbj variables?

just like any other css variables. For eg, we want our login widget to have a large border than the default one. 

```css
.loginWidgetPanelStyle {
    box-shadow: var(--bbj-shadow-l);
}
```

if we need to change the size, then we can go to the theme css and modify the variable 

```css
--bbj-shadow-l: 0 2px 8px #0d131e1a;
```

But it is recommend not to modify these variables, and if you need to modify one, then modify the theme variables all-together. For eg: if you modify `--bbj-shadow-l` then do modify these accordingly:

```css
--bbj-shadow-xs: 0 1px 0 #0d131e0d;
--bbj-shadow-s: 0 1px 2px #0d131e1a;
--bbj-shadow-m: 0 2px 4px #0d131e1a;
--bbj-shadow-l: 0 2px 8px #0d131e1a;
--bbj-shadow-xl: 0 4px 16px #0d131e1a;
--bbj-shadow-xxl: 0 8px 32px #0d131e1a;
--bbj-shadow: var(--bbj-shadow-s);
```

you can learn more about bbj-variables [here](https://basishub.github.io/basis-next/#/theme-engine/)