var header = document.createElement("h1");
header.innerHTML = "DIFFERENCE BETWEEN HTTP/1.1 and HTTP/2";
var subHeader1 = document.createElement("h6");
subHeader1.innerHTML = "HTTP Definition:";
var para1 = document.createElement("p");
para1.innerHTML = ` HTTP stands for Hypertext transfer protocol, it is key to all web application. Without HTTP, we can’t get any data from web application. Specifically, HTTP use to request and send information to the particular server.
For instance, if we search Guvi.com on our laptop, mobile or other devices, our web browser sends an HTTP request to the Guvi server for the content that we are looking for. Then, guvi server sends HTTP responses with text, images that will be appear on the screen.
`;
var subHeader2 = document.createElement("h6");
subHeader2.innerHTML = "HTTP/1.1, HTTP/2 and its Differences :";
var para2 = document.createElement("p");
para2.innerHTML = `The original HTTP which is named as HTTP0.9 created on 1991. And then later on, due to several stages of development, the first usable version of HTTP which is named as HTTP1.1. Eventhough, the version of HTTP2 is still in market, most of them were still sticked in HTTP1.1 . This shows the weightage of HTTP1.1 version.
But, HTTP2 which is created on 2015 solve several issues that HTTP1.1 did not anticipate. In particular, HTTP2 is much faster than HTTP1.1. It takes lesser time to load image or text while comparing HTTP1.1.
The main differences is 
In HTTP1.1, if you request some data to particular server it will respond when all your requested data is loaded. But in HTTP2, it gives your data which is loaded first and further you will get your data one by one when is ready. So, HTTP2 is less time consuming while comparing to HTTP1.1. That’s why we say, HTTP2 is faster and more efficient than HTTP1.1   
`;

subHeader1.append(para1);
subHeader2.append(para2);
header.append(subHeader1);
header.append(subHeader2);
document.body.append(header);