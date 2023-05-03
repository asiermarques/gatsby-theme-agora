[![CircleCI](https://dl.circleci.com/status-badge/img/gh/asiermarques/gatsby-theme-conferencer/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/asiermarques/gatsby-theme-conferencer/tree/main)
![Lighthouse accessibility](tests/.lighthouse/test-results/lighthouse_accessibility.svg)
![Lighthouse best practices](tests/.lighthouse/test-results/lighthouse_best-practices.svg)
![Lighthouse performance](tests/.lighthouse/test-results/lighthouse_performance.svg)

> Not ready for production use yet

# Gatsby Conferencer theme

A Gatsby theme to generate simple events and conferences landings pages.

Features:

- Customize the design (based in bootstrap5) by overwriting the components in the gatsby site that uses this theme
- Different agendas for different days based in a yaml file
- Speakers detail and summary based in markdown files
- Organizers summary in a yaml file
- Static pages as markdown files
- Talks with none or more than one speaker based in markdown files
- Venue in GoogleMaps (without a GoogleMap key)

Not yet but prioritized:

- Sponsors
- Different venues per agenda (partially implemented)
- i18n and support for different languages
- PostEvent documentation (images, videos, etc)
- Stats in the home

> **You can open [a PR](https://github.com/asiermarques/gatsby-theme-conferencer/pulls) with the label "proposal" to ask for more features!**

## Getting started

### Using the template (recommended)

> todo

### Install the theme

Install the theme dependency in your gatsby site

```shell
yarn add gatsby-theme-conferencer
```

Add the theme in your `gatsby-config.js` file

```javascript
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-conferencer",
      options: {},
    },
  ],
};
```

### Configure and add content to your conference site

All the configuration and content resides in the /content directory in the root of the gatsby project.  
The structure should be similar to this:

```
content
├── agenda.yaml
├── links.yaml
├── organizers.yaml
├── config
    ├── config.yaml
    └── images
        ├── banner.png
        └── logo.png
├── pages
    └── your-page.md
├── speakers
    ├── speaker-1.md
    └── speaker-2.md
└── talks
    ├── talk-1.md
    └── talk-2.md
```

#### Configuration file

The general configuration can be set in the content/config/config.yaml file, the default information is

```yaml
siteInfo:
  language: en
  url: https://conference.com

conferenceInfo:
  name: Awesome Conference
  claim: A great conference for developers and other mystical creatures
  date: 5th May, Bilbao
  logoImage: images/logo.png
  hashTag: "#conference"
  shareImage: images/banner.png
  ticketsCta:
    text: Get your ticket!
    link: "https://example.com"

summary:
  description: A little description for the conference, what is the audience, why is interesting to the people and this kind of stuff
  cta:
    text: Agenda and tickets soon
    link: #agenda

location:
  mapIframeUrl: https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.5333947155564!2d-2.9305296241199597!3d43.261200071123504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4f60c07fc049%3A0xd353dbcd51c2ff07!2sBAT%20%7C%20B%20Accelerator%20Tower!5e0!3m2!1ses!2snl!4v1681998466816!5m2!1ses!2snl
  venueInformation: |
    Edificio BAT, Auditorio 6ª Planta 
    Gran Vía de Don Diego López de Haro 1 
    48001 Bilbo, Bizkaia, España
```

#### Adding an speaker

You can create a markdown file with the speaker data in the `content/speakers` directory.  
The markdown file should have the following meta structure:

```markdown
---
key: required, the key for the speaker
name: required, the name of the speaker
title: optional, the company title
image: required, the path to the image file, for example images/speaker.png
social:
  twitter: optional, the twitter username
  linkedin: optional, the linkedin username
  github: optional, the github username
---

Text for the bio
```

#### Adding a talk

You can create a markdown file with the speaker data in the `content/talks` directory.  
The markdown file should have the following meta structure:

```markdown
---
key: required, the key for the talk
speakers: required, an array for the speakers, for example [ speaker ]
title: required, the title for the talk
---

The talk description
```

#### Adding the talk for an agenda slot

You should add the talk to the `content/agenda.yaml` file in order to be shown in the agenda.  
The talk is added by its key, for example:

```yaml
content:
  - type: talk
    track: 1
    key: the_talk_key
    slot: "16:30 - 17:10"
```

## Websites using this theme

- [DevOpsconf.es](https://devopsconf.es)
