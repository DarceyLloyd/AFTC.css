# <b>AFTC.css / AFTC.scss</b>
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

AFTC.css is a collection of styles with an option reset to allow for rapid build, rapid prototyping and quick and easy access to basic essentials.

### It is recommended that you use an editor with CSS intelisense capabilities.


## <b>What's new?</b>
- Re-added a reset I used to use, enhanced it a bit and added it in.
- Updated gulp build and watch commands ("gulp build" or "gulp watch") to now build:
    - aftc.min.css
    - reset.min.css
    - aftc.combined.min.css
- Split features out into individual scss files for you to configue as you see fit
- Added some styles which I've been using in work a lot recently
- Fixed a few styling bugs I've noticed
- Added commenting here and there
- Improved color gradient availability font and backgrounds now have 1 to 10 color scales available
- Added some font size settings via bootstrap style naming xxxs, xxs, xs, sm, sd, lg, xl, xxl, xxxl (% based)


<br>
<br>

## <b>Usage</b>

1. Open src/aftc.scss, comment out the imports you dont need. The import files are named logically so you can get an idea what each of them do.

2. Build via gulp eg

```
gulp build // will build dist
gulp watch // will watch
```


<br>
<br>

# <b>What's does AFTC.SCSS / AFTC.CSS give me?

## Styles are often named close to their actual css counterparts so that they are logical and easy to remember. EG: Class names available for use in class="<class-name>" are:
 - display-none || display-block || display-inline-block
 - visibility-visible || visibility-hidden
 - visible || hidden


<br>
<br>
<br>

# <b>Here's what's really in the box</b>

## <b>aftc.scss</b>
Imports for which aftc.scss styles you wish to build via gulp (command "gulp build"). Files are named logically so you should be able to work out what they each contain:

- _aftc.scss (main set of utility styles)
- _backgrounds.scss (styles to do with background:)
- _fonts.scss (styles to do with font-)
- etc

You get the idea.

<br>
<br>

## <b>_aftc.scss</b>
I will only list the ones I use most often, see file for full list.
- hide
- show
- visibility-visible || visible
- visibility-hidden || hidden
- text-align-left || txt-left
- text-align-right || txt-right
- text-align-center || txt-center
- hand || pointer
- <b>no-select</b>
- <b>no-wrap</b> || white-space-nowrap || white-space-normal
- pos-fixed
- pos-relative
- pos-absolute
- pos-static
- display-none
- display-block
- display-inline-block
- float-left || float-right
- overflow-none || overflow-hidden || overflow-scroll || overflow-visible
- italic || txt-italic
- txt-normal || txt-bold || txt-underline || txt-no-underline
- flex-container
- flex-container .col
- flex-container .col-fluid
- flex-container .col-fixed
- flex-container -col-order-1 > 2 > 3 > flex-container -col-order-4

<br>
<br>

## <b>_bootstrap.scss</b>
I will only list the ones I use most often, see file for full list.
- center-xs || center-sm || center-md || center-lg
- pad-xs-left-5 to 100. Steps of 5 to 50 then steps of 10 to 100
- pad-sm-left-5 to 100. Steps of 5 to 50 then steps of 10 to 100
- pad-md-left-5 to 100. Steps of 5 to 50 then steps of 10 to 100
- pad-lg-left-5 to 100. Steps of 5 to 50 then steps of 10 to 100



<br>
<br>

## <b>Font sizes</b>
- font-size-xxxs
- font-size-xxs
- font-size-xs
- font-size-sm
- font-size-md
- font-size-nm || - font-size-sd || both are 100%
- font-size-sd
- font-size-lg
- font-size-xl
- font-size-xxl
- font-size-xxxl



<br>
<br>

## <b>Common color styling</b>
I will only list the ones I use most often, see file for full list.

#FFFFFF, #EEEEEE, #DDDDDD, #CCCCCC, #BBBBBB, #AAAAAA, #999999, #666666, #454545, #303030, #202020, #111111,#000000, #FFCC00, #395F9E, #D01820, #00ADEF,#CC0000, #00CC00, #0000CC,#CCCC00,#CC00CC,#00CCCC,
#990000, #009900, #000099,#999900,#990099,#009999;

- bd-#[color-value-from-list-above] (border: 1px solid #color)
- bg-#[color-value-from-list-above] (background: #color)

- bg-facebook || bg-google || bg-twitter (background colors for facebook, google and twitter)


<br>
<br>

## <b>Access to color gradient lists</b>

- bg-red-1 > bg-red-10
- bg-green-1 > bg-green-10
- bg-blue-1 > bg-blue-10
- bg-gray-1 > bg-gray-10

eg red-1 blue-1 is dark red or dark blue, red-9 or green-9 is light red or light green background colors;

- font-red-1 > font-red-10
- font-green-1 > font-green-10
- font-blue-1 > font-blue-10
- font-gray-1 > font-gray-10

eg red-1 blue-1 is dark red or dark blue, red-9 or green-9 is light red or light green font colors.



<br>
<br>

## <b>Borders</b>

- round-0
- round-1
- round-3
etc (steps of 1 till 15)
- round-15
- round-20
- round-25
- round-30
etc (steps of 5 till 50)
- round-50


### Advanced corner rounding

- round-left
- round-right
- round-top
- round-bottom


<br>
<br>

## <b>Spacing, padding, margins and dimensionalisation</b>

- margin-auto || padding-auto
- margin-0 || padding-0
- margin-1 || padding-1
- margin-2 || padding-2
- margin-3 || padding-3
etc

Sets the margin or padding in pixels.

Full list: 0,1,2,3,4,5,10,15,20,25,30,40,50,75,100,150,200,250,300,350,400,450,500

- w-0 (width: 0px)
- w-1 (width: 1px)
- w-2 (width: 2px)
- w-3 (width: 3px)
etc

Defines the width in pixels.

Full list: 0,1,2,3,4,5,10,15,20,25,30,40,50,60,70,80,90,100,125,150,175,200,225,250,275,300,350,400,450,500,550,600,650,700,750,800,860,960;

- w-0p (width: 0%)
- w-10p (width: 10%)
- w-25p (width: 25%)
- w-33p (width: 33%)
- w-50p (width: 50%)
- w-66p (width: 66%)
- w-75p (width: 75%)
- w-100p (width: 100%)
etc

Defines the width in %.

Full list: 0,9,10,11,24,25,26,32,33,34,49,50,51,64,65,66,74,75,76,95,98,99,100;





<br>
<br>

## <b>Transition times</b>

- transition-time-1 (0.1 seconds)
- transition-time-2 (0.2 seconds)
- transition-time-3 (0.3 seconds)
- transition-time-4 (0.4 seconds)
- transition-time-5 (0.5 seconds)
- transition-time-6 (0.75 seconds)
- transition-time-1s (1 seconds)
- transition-time-2s (2 seconds)



<br>
<br>

## <b>Box shadows</b>

- box-shadow-top
- box-shadow-bottom
- box-shadow-left
- box-shadow-right




<br>
<br>

## <b>Transformations</b>

- rotate-0
- rotate-45
- rotate-90
- rotate-135
- rotate-180
- rotate-225
- rotate-270
- rotate-315


- rotate-neg-0
- rotate-neg-45
- rotate-neg-90
- rotate-neg-135
- rotate-neg-180
- rotate-neg-225
- rotate-neg-270
- rotate-neg-315

- scale-10 (scale of 0.1)
- scale-20 (scale of 0.2)
- scale-30 (scale of 0.3)
etc
- scale-100 (scale of 1 aka 100%)
- scale-110 (scale of 1.1 aka 110%)
- scale-120 (scale of 1.2)
etc
- scale-200 (scale of 2 aka 200%)




<br>
<br>
<br>
<br>


## <b>Found this useful? Please Donate...</b>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<br>
<br>




<a href="http://pph.me/Darcey" target="_blank" title="I am available for hire, click here!">![Hire](http://www.allforthecode.com/images/pph_widget.jpg)</a>

