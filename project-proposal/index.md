# AudioHub
## Introduction
This proposal is for the Large Grant, but I am proposing that this project can be done within a years time with the right amount of people on board.

AudioHub is a web-platform that allows users to primarily search and upload audio/video clips. The platform is for users to share oral accounts, search through oral accounts and easily download oral accounts in any audio or video format. AudioHub hopes to answer the following questions:

- Where can I find reliable oral accounts?
- How can I download or save these oral accounts for future uses?
- How can I minimize the research process?
- Where can students begin their historical research?
- How can I share my own research for other historians to build on?

A major problem that historians face is being able to find reliable oral accounts for research. Specifically, it can assist young scholars that are new to historical research. There are thousands of resources both physically and digitally and the process of sifting through dozens of resources is both complex and time consuming. To further complicate the process there are only a subset of those resources that are reliable. Determining the reliability of a source is research of its own. AudioHub offers to unify the search process and provide reliable oral accounts. The platform creates a space that users can begin their historical research journey and communicate with scholars for further help.

The platform is a subscription based service for all scholars regardless of experience. Different levels of membership can communicate with each other for further reliable resources. For example, a member with a Student membership can communicate with someone with a Scholarly membership. Scholarly memberships are affiliated with notable organizations, certified professors, researchers, and/or historians. This line of communication can provide users more context about an oral account and can assist users to the next steps of their research.


## Methods
AudioHub front-end platform will be built using HTML5, Bootstrap, React/Redux, its backend platform will be built using NodeJS as well as an authentication service using JWT. It's primary database will be MongoDB because of the unorthodox structure of its data (audio/video). There will be some research to find a suitable deployment environment for the platform, whether that be AWS, DigitalOcean, Heroku etc.

Seeing that AudioHub allows users to upload audio/video clips there is a risk that these uploads are illegitimate or possibly illegal. To minimize this risk AudioHub has a subscription based service with different levels of subscriptions. This feature hopes to attract only serious contributors. The subscription based service has three levels of members. Free to use members are only allowed to listen and favorite audio and video clips. Student members are allowed to listen, favorite, and download audio and video clips. Scholarly members are allowed to listen, favorite, download and upload audio and video clips. To determine the registration format for scholarly members, research will be conducted in order establish what kind of certification is necessary for a scholarly member to have and a list of trusted organizations that a scholarly members might be part of. This will eliminate users from forging an illegitimate identity and uploading copyrighted content.

AudioHub's search platform is unique in comparisons to other platforms such as YouTube because it draws its audio sources from its users and across the world wide web. Therefore, search results pull results from other audio and video sharing websites. This functionality unifies the tedious work of searching across multiple websites to find oral accounts. This brings another risk to AudioHub, downloading audio and video from less reliable external sources. To minimize this risk, AudioHubs' development process will be reviewed by a set of potential stakeholders. These stakeholders will provide feedback and reliable external resources, such as good video and audio websites historians depend on. With the assistance of these stakeholders, the next step is to acquire proper rights to content through organizations and external sources. This may require buying rights to content from organizations and/or extracting and pruning data from different organizations so they match the schema of the database. This step will provide the platform an initial set of data that users can become acquainted with during the beta release of the product and will also be used for testing/development purposes.

The entire process will follow a TDD (Test Driven Development) approach which means developers will want to test their product continuously through the lifespan of the project. However, it is also important that the public will be able to use the product and provide developers feedback with what works and doesn't work. "Treating your users as co-developers is your least-hassle route to rapid code improvement and effective debugging"[^1](http://www.unterstein.net/su/docs/CathBaz.pdf). This is one of the development methodologies that allow for a great product. The final phase of the project will involve a beta release to the public.


## Timeline
AudioHub will need a team of at least 4 people to build the platform from scratch.
With about 4 people the platform can be completed in about 12 months.

In the first 2 months of the project, developers would sit down with potential stakeholders such as history professors, researchers and students to discuss the expectations of AudioHub. This discussion would gauge how developers think about the design of the platform, the search functionality, the set of reliable online sources the platform would use. At this time, organizations will be contacted to gain rights to audio and video clips, and there should be some idea of what defines a scholarly member.

In the next 6-8 months, developers would begin building the website. Below is a list of tasks that should be completed within the 6-8 months. Between each of these tasks there will be continuous communication with potential stakeholders.
- Create a development environment
- Establish a deployment strategy and pay for deployment environment (Heroku, AWS, DigitalOcean)
- Establish backlog and effort estimate tasks
- Set up testing environment for continuous integration testing
- Create a DB using DB schema
- Create a set of endpoints that either draw from the DB or from API's of external sources
- Create front-end components
- Create an authentication service
- Link everything together
- Integration testing

At this phase the product would also be marketed and a date for beta release of the product would be established to the public.

In the last 4-6 months of the project, the team will release a beta version of the website. This version of the website will be intended for people to try out with no subscription. Users will be able to test the searching and filtering functionality, create free accounts, download audio/video clips from the set of data the team has gotten from its trusted sources. At this point in time, there will be no uploading functionality available for the public. This phase of the project is necessary to find bugs, make changes that suite the public, and feel out the kind of traffic the platform can handle. During this time, developers would actively work at making adjustments and finalizing the product.  

## Importance
It's important that young scholars have a reliable place to start their research. However, complexity and reliability make research a daunting experience. Even as researchers become more acquainted with the research process it does not reduce its complexity. The problem with historical research is the abundance of resources that are available and the inability to efficiently search through them.

Oral History is a different view of history that hopes to piece together the public view of a historical event rather than a factual view. Allesandro Portelli says that oral sources are credible in their own way; not adherence to fact but to the symbolism of a moment[^2](https://www.albany.edu/jmmh/vol2no1/lightssoundessay.html). Due to the nature of oral history it is difficult to research the symbolism of an event because of the magnitude of oral accounts that exist in the world. Every person in the world can talk about an event they've experienced and be a credible oral account.

However, there is still a level of credibility that is necessary in oral accounts. The source that releases an oral account or is responsible for obtaining that oral account is a level of credibility that is useful. By ensuring that an oral account is obtained through a reliable source, researchers know where to begin looking for more information, whether it means contacting sources, looking into research the sources have done, etc. It similar to looking at the resources section on Wikipedia, it provides a way for researchers to gauge their own research.

AudioHub attempts to unify that entire process and provide a space where researchers can communicate and exchange sources.


## Budget

|  Item | Location | Description | Quantity Details | Cost | Total |
|  ------ | ------ | ------ | ------ | ------ | ------ |
|  Hosting | DigitalOcean | Clouding computing platform for hosting virtual servers | 4GB | $20/mo | $240/yr |
|  Domain Name | Domain.com | Provides a domain name for the website | .com pricing | $0.83/mo | $9.99/yr |
|  Developers | Employee | Frontend and Backend Developers | 4 | 3,333.33/mo | $160,000/yr |
|  Designer | Employee | Web Designer | 1 | 3,333.33/mo | $40,000/yr |
|  Stakeholders | Volunteer | Reliable people that can provide input to the platform | 5 | $0/mo | $0/yr |
|  Space | School/At Home | Place for developers to work and meet |  | $0/mo | $0/yr |
|  Other |  | Copyright buying allowance |  | 500 | $500/yr |
|  Grand Total |  |  |  |  | 200, 749.99/yr |
