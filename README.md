# SignatureModule

This project was generated with the help of [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8. The intention is to create a signature module for the clients of the Bigle Iberia SL company.

# Introduction

This document is a very small and brief version of the Software Requirements Specifications. The reference of the structure is also a small duplication of a IEEE committee guideline.

In this context of the docuemnt, we intented for other developers of the team to understand:

* what we are doing,
* why we are doing,
* how we are doing.

# Context

Signature module is a dynamic signature process platform for users to be able to sign their documents and intereact with the other signing authorities. These authorities can be a single attendees or corporates or third party contributers to the signing process.

The module is a piece of a platform that is going to be designed to sign, review, sending and receiving.


# Techinical Specifications

## Functional Requirements

* The platform has to be able to hadle all of it's operations without problem.
* The platform has to enable multiple signers to interact with the same document.
* The signing authorities should have their personal options and information accesable or modifiable over the platform ( changing signature module provider etc.) 
* Users of the platform should be able to determine, or be aware of the user authentications.

## Non-Functional Requirements

* The system has to be scaleable if there are many signature processes ongoing.
* The system must be available to serve anytime the module is needed.
* The system must be a recovery friendly if in case, something is going wrong. Users might be able to come back to a state or at least save their current state before the data is lost.
* The platform that is intented to be created, has to be maintainable for further improvements and changes, therefore it has to be well documented.
* The system should be secure enough to provide full service in anytime.

## External Interface Requirements

### UI(User Interface)

An interface characteristics are not limited to but: 

* Beautifully Designed, 
* User Friendly,
* Simple, Minimalist, Eye Catching,
* Supporting multiple languages,
* Fast enough to handle all the required operations,
* Bug Free! (yeah, sure right)
* Well Documented

### Hardware Interfaces

The signature module is working on both desktop and mobile phones. The minimum requirements would be equal to nowadays mid-range cell phones or any laptop is operateable with latest internet browsing providers. As a reference, for the google chrome, the minimum (Version 73.0.3683.103 (Official Build) (64-bit)).

Furthermore,  A system with these specifications can handle a Network of approximately all 4G, depends on the mobile phone release date and specifications, even 5G might be considered for a fast, smooth user experience through mobile devices.

### Software Interfaces

The signature module requires Node.js to be installed on the system, more specifically Typescript 2.0 for its latest release. 

The module is built on entirely TypeScript, with Angular, Node.js, Redux, HTML, SCSS and some more. 

The library ng2-pdf-viewer is used for the pdf uploading, reviewing and editing for the first initiative of the project. 


### Communication Interface

Signature module requires an internet connection to install new plugins, update already installed ones and update some of its components (APIs, modules etc.).

## Development server

For the development server, localhost is preferred to see the changes and track the user perspective practices. 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help or the information about the signature module project, you may contact Burak Kilic(burak@biglelegal.com) or Oscar Ginette(oscar.ginette@biglelegal.com), whome are the formal developers of the module, under the supervising of the CTO of BigleLegal, Daniel Tomas Bartomeous(daniel.tomas@biglelegal.com). 
