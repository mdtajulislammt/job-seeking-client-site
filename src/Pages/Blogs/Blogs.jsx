

const Blogs = () => {
     return (
          <div className="lg:mx-28 md:mx-20 mx-10 my-10">
              <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token? How do they work and where should we
store them on the client-side?
                    </div>
                    <div className="collapse-content"> 
                    <p className="my-3">Access Token: A credential used to access specific resources; it's time-limited and included in API requests for authentication.

Refresh Token: A credential that, when the access token expires, allows the client to obtain a new access token without user re-authentication. It has a longer expiration period.</p>
<p>How They Work:

Access Token: Authenticates requests to access resources.
Refresh Token: Obtains a new access token when the current one expires.
Storage on Client-side:

Access Token: Typically stored in memory or a secure storage mechanism.
Refresh Token: Must be stored securely, often in a secure HTTP-only cookie or a device-secured storage.</p>
                    </div>
                    </div>
              <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    What is express js? What is Nest JS?

                    </div>
                    <div className="collapse-content"> 
                    <p className="my-2">Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building web servers and APIs in Node.js, making it easier to handle routes, manage HTTP requests and responses, and interact with databases. Express.js is widely used in the Node.js ecosystem for its simplicity and scalability in building web applications.</p>
                    <p>NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It uses TypeScript and is built with an architectural design inspired by Angular. NestJS is known for its modular and extensible structure, making it suitable for developing enterprise-level applications and APIs.</p>
                    </div>
                    </div>
              <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                    </div>
                    <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                    </div>
          </div>
     );
};

export default Blogs;