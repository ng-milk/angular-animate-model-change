# Angular 'animate on model change' directive
![Angular animate on model change demo](https://ngmilk.rocks/content/images/2015/12/angular-model-change-animation.gif)


### [See a demo](http://ng-milk.github.io/angular-animate-model-change/)
A directive that will help you animate elements when the model updates with some nifty CSS, ng-animate not needed. Read more about it [here](https://ngmilk.rocks/2015/12/18/animate-elements-when-a-model-changes-in-angularjs/).


## Usage
1. Include `ng-animate-model-change.js`.
2. **Optional**: Include `ng-animate-model-change.css` (just if you don't plan to add any CSS of your own).
3. Add `dm.animateModelChange` as a dependency to your app.
4. Profit!

## Bower
Installable via `bower`:

```bash
bower install ng-animate-model-change
```

## Example

```html
[...]
<section animate-model-change class="number" model="{{model}}"></section>
[...]
```

...and some nice styling:

```css
.number{
  transition:
    0.3s color ease,
    0.3s transform ease;
}

.number--increment{
  color: green;
  transform: scale(1.6);
}

.number--decrement{
  color: red;
  transform: scale(0.8);
}
```

You can see more examples in [index.html](https://github.com/ng-milk/angular-animate-model-change/blob/master/index.html).


## Configuration
You can configure the the timeout duration & increment, decrement and non-number classes (for those situations when the model update is not a number).

```html
<span class="foo"
      animate-model-change
      model="{{model}}"
      increment-class="up"
      decrement-class="down"
      non-number-class="unknown"
      timeout="500">
  ...
</span>
```

...and the CSS:
```css
.foo{
  transition: 0.5s color ease;
  color: black;
}

.up{
  color: green;
}

.down{
  color: red;
}

.unknown{
  color: gray;
}
```

## About ngmilk
<img src="http://ngmilk.rocks/content/images/2014/10/111-1.jpg" width="200px"/>

**ngmilk** is the place to go for fresh front-end articles, with a focus on AngularJS.
See more on [ngmilk.rocks](https://ngmilk.rocks)

Follow [@ngmilkrocks](http://twitter.com/ngmilkrocks) on Twitter to stay ahead of the game.

