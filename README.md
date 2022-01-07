<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/codebarbarian/random">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Random</h3>

  <p align="center">
    A NodeJS Express based Rest API delivering a lot of random things while I learn more about NodeJS and Express!
    <br />
    <a href="https://github.com/codebarbarian/random"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/codebarbarian/random">View Demo</a>
    ·
    <a href="https://github.com/codebarbarian/random/issues">Report Bug</a>
    ·
    <a href="https://github.com/codebarbarian/random/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

What more can I say? It is a rest API written in NodeJS using the Express minimalist web framework. It will mainly contain just a bunch of random things which may or may not be useful to you.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [Express.js](https://expressjs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started
All source files are located in ./app. Just follow the Prerequisites and you should be good to go! 
When all is ready, I recommend using **nodemon** when developing applications since it will automatically restart the application when changes have been done to the application code. 


```bash
# If you are using the normal node command to launch the app
$ node ./app.js

# If you are using nodemon to launch the app
$ nodemon ./appjs
```

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```bash
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/codebarbarian/random.git
   ```
2. Install NPM packages
   ```bash
   npm install
   ```
3. Launch the app
   ```bash
   node ./app.js
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

### Example 1
Are your friends always asking what kind of games to play? Use the Random method by using your browser to access:
```
http://127.0.0.1:8080/random/game
```
This will provide you with a random game
```json
[
    {
        "random_game": "Rocket League"
    }
]
```

### Example 2
Are you wondering when SpaceX is launching another rocket? 
```
http://127.0.0.1:8080/spacex/launches
```
This will provide you with spacex next launch: 
```json
[
    {
        "launch_date_unix": 1550799900,
        "launch_date_utc": "2019-02-22T01:45:00.000Z",
        "launch_date_local": "2019-02-21T20:45:00-05:00"
    }
]
```

_For more examples, please refer to the [Documentation](#)_

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap
- [X] Initial MVC Structure and code
- [-] Initial API CRUD
- [-] Swagger.io for Clean API documentation
- [-] Keep adding features as we go!

See the [open issues](https://github.com/codebarbarian/random/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Morten Haugstad - [@codebarbarian](https://twitter.com/codebarbarian)

Project Link: [https://github.com/codebarbarian/random](https://github.com/codebarbarian/random)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/codebarbarian/random.svg?style=for-the-badge
[contributors-url]: https://github.com/codebarbarian/random/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/codebarbarian/random.svg?style=for-the-badge
[forks-url]: https://github.com/codebarbarian/random/network/members
[stars-shield]: https://img.shields.io/github/stars/codebarbarian/random.svg?style=for-the-badge
[stars-url]: https://github.com/codebarbarian/random/stargazers
[issues-shield]: https://img.shields.io/github/issues/codebarbarian/random.svg?style=for-the-badge
[issues-url]: https://github.com/codebarbarian/random/issues
[license-shield]: https://img.shields.io/github/license/codebarbarian/random.svg?style=for-the-badge
[license-url]: https://github.com/codebarbarian/random/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mortenhaugstad
[product-screenshot]: images/logo.png