# Mockup-email

Work in progress. This app will automatically overlay images on a background image. The initial approach will focus on a graphic on a sleeveless shirt. Challenges will include being able to apply transforms in a convincing manner. It is likely the quality will be something to continuously hone on after the conclusion of the hackathon. The request for the interface is for it to be through gmail, allowing a business owner to handle mockup requests in a reply.

The large scale potential is machine learning applied to adequate manipulation of text on a picture of a model. Training various models to apply one image on another through an API can be lucrative if the quality is top notch, and the service is highly available. Machine learning applied to simple graphic design tasks. Brilliant.

### How it works:

- Skip authentication for the prototype
- Automatically pull the first attachment from an email
  - Set up a Node server that listens to emails (or use hooks from gmail?)
  - Position this image on another image (it won't look good for now) 
-
