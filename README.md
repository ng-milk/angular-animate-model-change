# Angular 'animate on model change' directive
@TODO ================> ![Angular animate on model change demo](https://ngmilk.rocks/content/images/2015/09/kD5cm9.gif)


### [Quick Demo](http://ng-milk.github.io/angular-animate-model-change/)
A directive that will help you animate elements when the model updates, just with CSS, ng-animate not needed. Read more about it [here](https://ngmilk.rocks/2015/12/08/animate-elements-when-a-model-changes-in-angularjs/).


## Usage
1. Include `ng-animate-model-change.js`.
@TODO ================> 2. Include `ng-animate-model-change.css`.
3. Add `dm.animateModelChange` as a dependency to your app.
4. Profit!

## Bower
Installable via `bower`:

```bash
bower install ng-animate-model-change
```

## Example
See [index.html](https://github.com/ng-milk/angular-animate-model-change/blob/master/index.html) for an example.


@TODO ================>
```html
[...]
<section help-block help-block-title="Here to help" help-block-content="Help content"></section>
[...]
```

@TODO ================>
## Title icon
You can pass a 'title' icon to the directive via the `help-block-icon-class` attribute. In the example [index.html](https://github.com/ng-milk/angular-animate-model-change/blob/master/index.html) [font-awesome](https://fortawesome.github.io/Font-Awesome/) is used.

```html
<section help-block help-block-title="{{title}}" help-block-content="{{content}}" help-block-icon-class="fa fa-question-circle"></section>
```

@TODO ================>
## Further customization
The class `expanded` will be appended to the directive container when the help block is toggled.
To override the directive styles you can customize the following:
* `.hb-row` -> the directive container
* `.hb-row.expanded` -> the directive container when toggled
* `.hb-title` -> the directive title
* `.hb-content` -> the directive content

Check out [index.css](https://github.com/ng-milk/angular-animate-model-change/blob/master/src/index.css) for the full list of CSS props.


## About ngmilk
<img src="http://ngmilk.rocks/content/images/2014/10/111-1.jpg" width="200px"/>

**ngmilk** is the place to go for fresh front-end articles, with a focus on AngularJS.
See more on [ngmilk.rocks](https://ngmilk.rocks)

Follow [@ngmilkrocks](http://twitter.com/ngmilkrocks) on Twitter to stay ahead of the game.

