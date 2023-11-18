# EmpanadAPP
#### Video Demo:  https://youtu.be/8Nbc3nfBXUQ
#### Description:
![image](https://github.com/santiago-salinas/empanadAPP/assets/48341470/e76ae4b1-4c53-4ba2-8093-431a17f092c5)

EmpanadAPP is an in-progress application designed to streamline the empanada ordering process. Its primary aim is to offer a user-friendly management dashboard for ordering empanadas with ease.

**Key Features:**

- **Profile Creation:** Create multiple profiles, each with its own customized list of empanadas.

- **Ordering Simplified:** When you're ready to place an order, simply select the desired profiles, and the app will automatically generate a consolidated list of empanadas to order. You'll also receive a price estimate for your order.

Please note that this app is currently under development, and we are continuously working to enhance its functionality and user experience. Stay tuned for updates and new features as we make your empanada ordering experience even better!

![image](https://github.com/santiago-salinas/empanadAPP/assets/48341470/477e6bc2-1065-4fe0-bf33-ac5ab2d7e0ec)

![image](https://github.com/santiago-salinas/empanadAPP/assets/48341470/9f485701-06c2-472f-9841-f56046b7de18)

## What problem does it solve?
I aimed to steer clear of the conventional approach of creating a solution and then identifying a problem, which many often adhere to. Instead, I focused on addressing a weekly challenge my family and I faced during dinner—how to efficiently organize the list of empanadas we intended to order.

With each family member ordering anywhere from 3 to 5 empanadas from a given list, the task was to combine our individual choices to form a coherent order. Without proper organization, the ordering process could easily become confusing. While it might seem like a niche problem, I believe others may also find it relatable.

So, why not maintain a single record? The reason is, my brothers' participation varies—sometimes they join, sometimes they don't. Their preferences also fluctuate, with occasional cravings for an extra empanada due to increased hunger or a reduction in the count for personal reasons.

To address these constant changes and alleviate my weekend concerns, I created an app that simplifies the entire process.

## Areas for Improvement

While the current architecture provides a solid foundation, there are several areas that could be enhanced for a more robust and versatile system:

### 1. **Scalability through Modularization:**
   Consider breaking down the .NET RestAPI application into modular components, each responsible for a specific set of functionalities. This modular approach not only improves code organization but also facilitates scalability by allowing the addition or removal of components without affecting the entire system.

### 2. **Dynamic Database Configuration:**
   While the database instantiation is a step towards flexibility, further improvements can be made by implementing dynamic database configuration. This would enable the application to adapt seamlessly to changes in data storage requirements, supporting various database types or configurations based on evolving needs.

### 3. **Enhanced Error Handling:**
   Strengthen the error-handling mechanisms within the API to provide meaningful feedback to the frontend. Implementing comprehensive error messages and logging will aid in debugging and troubleshooting, ensuring a smoother user experience and making it easier to identify and address issues.


## Angular Project File Structure

In organizing my Angular projects, I prefer a systematic approach that revolves around three primary folders: Pages, Reusables, and Services.

### 1. **Pages:**
   This folder serves as the repository for the main pages defined for Angular's automatic URL routing. Here, each page corresponds to a distinct view or component within the application. Organizing pages in this manner facilitates seamless navigation and ensures a clear structure in line with the application's overall functionality.

### 2. **Reusables:**
   The Reusables folder plays a pivotal role in encapsulating components that are designed for repeated use across various pages or within the same page as multiple instances. By centralizing these reusable components, development becomes more modular, promoting code reusability and reducing redundancy in the project.

### 3. **Services:**
   Services constitute the intellectual core of the application, housing the primary logic that governs its functionality. In the context of API integration, this is the designated space where API calls are made, ensuring a separation of concerns and adhering to the principles of a clean and maintainable codebase.

By adhering to this structured file organization, the Angular project becomes more scalable, maintainable, and comprehensible. Each folder serves a distinct purpose, fostering a clear separation of concerns and promoting best practices in software development.

## Use of new technologies

Embracing new technologies has been a transformative aspect of my web development journey, especially when confronted with the intricacies of web design. Acknowledging that my web design skills are not the best, I sought to use the capabilities of ChatGPT to bridge the gap. This AI-powered tool became an invaluable resource for receiving recommendations and insights on optimizing the visual aspects of my projects. By writing my design challenges and preferences in plain text, AI was able to render me a decent looking web-page. Although it wasn't instant, I had to re-do, re-write, re-ask a ton of things until it looked like I wanted it to look.

Beyond design recommendations, my exploration into the realm of new technologies extended to the realm of Angular development. ChatGPT became an indispensable companion in the debugging process, particularly when troubleshooting anything Angular-related. Describing the specific issues or error messages encountered to the AI made me more fluent in error correction, doing in 30 seconds what could have taken me 10 minutes of searches in stackoverflow.



Some design elements have been licensed granted under the MIT-LICENSE provided by Microsoft Fluent Desgin Emojies
https://github.com/microsoft/fluentui-emoji/blob/main/LICENSE


