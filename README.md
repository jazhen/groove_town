![logo](https://user-images.githubusercontent.com/6326660/102277904-c5134100-3edd-11eb-9cfb-4073d5c6c461.png)

A [Bandcamp](https://bandcamp.com/) inspired website, where users can upload, download, and stream music. Built mobile-first, optimized for all devices.

# &#127926; [Check out the website!](http://groovetown.herokuapp.com/#/)

# &#128295; Technologies and Tools

## Backend

![Ruby](https://img.shields.io/badge/-Ruby-informational?style=flat&logo=Ruby&logoColor=white&color=CC342D)
![Ruby on Rails](https://img.shields.io/badge/-Ruby_on_Rails-informational?style=flat&logo=ruby-on-rails&logoColor=white&color=CC342D)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-informational?style=flat&logo=PostgreSQL&logoColor=white&color=336791)
![Amazon AWS](https://img.shields.io/badge/-Amazon_AWS-informational?style=flat&logo=amazon-aws&logoColor=white&color=232F3E)

## Frontend

![JavaScript](https://img.shields.io/badge/-JavaScript-informational?style=flat&logo=JavaScript&logoColor=black&color=F7DF1E)
![React](https://img.shields.io/badge/-React-informational?style=flat&logo=React&logoColor=black&color=61DAFB)
![Redux](https://img.shields.io/badge/-Redux-informational?style=flat&logo=Redux&logoColor=white&color=764ABC)
![HTML5](https://img.shields.io/badge/-HTML5-informational?style=flat&logo=HTML5&logoColor=white&color=E34F26)
![CSS3](https://img.shields.io/badge/-CSS3-informational?style=flat&logo=CSS3&logoColor=white&color=1572B6)
![SASS](https://img.shields.io/badge/-SASS-informational?style=flat&logo=SASS&logoColor=white&color=CC6699)
![Font Awesome](https://img.shields.io/badge/-Font_Awesome-informational?style=flat&logo=Font-awesome&logoColor=white&color=339AF0)

## Misc
![Heroku](https://img.shields.io/badge/-Heroku-informational?style=flat&logo=Heroku&logoColor=white&color=430098)
![Webpack](https://img.shields.io/badge/-Webpack-informational?style=flat&logo=Webpack&logoColor=black&color=8DD6F9)
![ESLint](https://img.shields.io/badge/-ESLint-informational?style=flat&logo=ESLint&logoColor=white&color=4B32C3)
![Prettier](https://img.shields.io/badge/-Prettier-informational?style=flat&logo=Prettier&logoColor=black&color=F7B93E)

# &#128187; Website Demo
## Home Page
| Desktop | Mobile |
|--|--|
| ![splash-desktop](https://user-images.githubusercontent.com/6326660/102149873-545c1e00-3e24-11eb-94af-83e6a56694e5.jpg) | ![splash-mobile](https://user-images.githubusercontent.com/6326660/102149875-558d4b00-3e24-11eb-9563-ca56e2bacd18.jpg) |

***
## Album Show Page
| Desktop | Mobile |
|--|--|
|
![album-desktop](https://user-images.githubusercontent.com/6326660/102150215-e8c68080-3e24-11eb-92f2-40ce2b72686b.jpg) | ![album-mobile](https://user-images.githubusercontent.com/6326660/102150216-e95f1700-3e24-11eb-83d5-b4819b1d7e85.jpg)

***
## Search Functionality

![search](https://user-images.githubusercontent.com/6326660/102148576-93d53b00-3e21-11eb-8301-f99b18c1986a.jpg)

# &#128269; Code Samples

## Audio Player
In order to replicate Bandcamp's music player, I had to strip away the styling from
the default HTML5 Audio Element and then implement my own custom controls using JavaScript.
![music_player](https://user-images.githubusercontent.com/6326660/102283596-95693680-3ee7-11eb-8118-0efa35bb53ed.png)

## Backend Custom Validations
Providing custom validation error messages to the user instead of the default from
Ruby on Rails required me to create a class that inherited from ```ActiveModel::Validator```.
This example shows my implementation of custom error messages for the user sign up page.
![backend_validations](https://user-images.githubusercontent.com/6326660/102286460-3d353300-3eed-11eb-8cdf-966234d7600a.png)
