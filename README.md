![logo](https://user-images.githubusercontent.com/6326660/102277904-c5134100-3edd-11eb-9cfb-4073d5c6c461.png)

A [Bandcamp](https://bandcamp.com/) inspired website, where users can upload, download, and stream music. Built mobile-first and optimized for all devices.

# &#127926; [Check out the website!](https://groovetown.herokuapp.com/#/)

# &#128295; Technologies and Tools

## Back-end

![Ruby](https://img.shields.io/badge/-Ruby-informational?style=flat&logo=Ruby&logoColor=white&color=CC342D)
![Rails](https://img.shields.io/badge/-Rails-informational?style=flat&logo=ruby-on-rails&logoColor=white&color=CC342D)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-informational?style=flat&logo=PostgreSQL&logoColor=white&color=336791)
![AWS S3](https://img.shields.io/badge/-AWS_S3-informational?style=flat&logo=amazon-aws&logoColor=white&color=232F3E)

## Front-end

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

# &#128187; Demo
## Responsive Design
| Desktop | Mobile |
|--|--|
| ![desktop](https://user-images.githubusercontent.com/6326660/103392206-8b435c80-4ad1-11eb-98a3-6a25a9494c68.png) | ![mobile](https://user-images.githubusercontent.com/6326660/103392208-8ed6e380-4ad1-11eb-9c66-cbc4a676e6e9.png) |

## Search Functionality
![search](https://user-images.githubusercontent.com/6326660/103398961-b8a10200-4af3-11eb-896c-7c0c0b826c81.gif)

## Download Music
![download](https://user-images.githubusercontent.com/6326660/103398475-bc338980-4af1-11eb-8b2e-15bdd5fc5719.gif)

## Upload Music
![upload](https://user-images.githubusercontent.com/6326660/103392213-94ccc480-4ad1-11eb-888b-ae3bf972e0e3.png)

# &#128269; Code Samples

## Audio Player
In order to replicate Bandcamp's music player, I had to strip away the styling from
the default HTML5 Audio Element and then **implement my own custom controls** using JavaScript.
![music_player](https://user-images.githubusercontent.com/6326660/102283596-95693680-3ee7-11eb-8118-0efa35bb53ed.png)

## Custom Back-end Validations
Providing **custom validation error messages** to the user instead of the default from
Ruby on Rails required me to create a class that inherited from ```ActiveModel::Validator```.
This example shows my implementation of custom error messages for the user sign up page.
![back-end_validations](https://user-images.githubusercontent.com/6326660/102286460-3d353300-3eed-11eb-8cdf-966234d7600a.png)
