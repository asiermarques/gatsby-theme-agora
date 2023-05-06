[![CircleCI](https://dl.circleci.com/status-badge/img/gh/asiermarques/gatsby-theme-conferencer/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/asiermarques/gatsby-theme-conferencer/tree/main)
![Lighthouse accessibility](tests/.lighthouse/test-results/lighthouse_accessibility.svg)
![Lighthouse best practices](tests/.lighthouse/test-results/lighthouse_best-practices.svg)
![Lighthouse performance](tests/.lighthouse/test-results/lighthouse_performance.svg)

# Gatsby theme Ágora

A Gatsby theme to generate simple events and conferences landings pages.

**See the [live demo](https://gatsby-conferencer-demo.netlify.app)** generated from the [template repository](https://github.com/asiermarques/gatsby-conferencer-site-template)!

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

### Option 1 (recommended): Using the template

You can use the [template repository](https://github.com/asiermarques/gatsby-conferencer-site-template) of the demo site that is fully configured and ready to be used.

### Option 2: Follow the following steps

#### Install the theme

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
      options: {
        siteUrl: "https://yourdomain.com",
      },
    },
  ],
};
```

#### Configure and add content to your conference site

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

##### Add the Configuration file

The general configuration can be set in the content/config/config.yaml file, the default information is

> _Important note with images_: if your received the error "Cannot return null for non-nullable field ConfigYamlConferenceInfo.xxxImage",
> check if the relative path for the image is correct. This happens when the image can't be found.

```yaml
siteInfo:
  # optional, the language of the site
  language: en
  # required, the site url
  url: https://conference.com
  # optional, the footer notes. You can specify null to remove all the footer notes.
  # They can be written in markdown
  footerNotes: Created with [Gatsby Theme Conferencer](https://github.com/asiermarques/gatsby-theme-conferencer)

conferenceInfo:
  # required
  name: Awesome Conference
  # required
  claim: A great conference for developers and other mystical creatures
  # required
  date: 5th May, Bilbao
  # required
  logoImage: images/logo.png
  # required
  hashTag: "#conference"
  # required
  shareImage: images/banner.png
  # optional
  ticketsCta:
    text: Get your ticket!
    link: "https://example.com"

summary:
  # required
  description: A little description for the conference, what is the audience, why is interesting to the people and this kind of stuff
  # optional
  cta:
    text: Agenda
    link: "#agenda"

location:
  # required
  mapIframeUrl: https://www.openstreetmap.org/export/embed.html?bbox=-3.0432558059692383%2C43.273112177849896%2C-2.9591417312622075%2C43.31212645126047&amp;layer=mapnik
  # required
  venueInformation: |
    Jardin Botánico s/n
    48902 Barakaldo, España
```

##### Adding an speaker

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

##### Adding a talk

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

####3 Adding the talk for an agenda slot

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
