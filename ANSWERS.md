- [ ] Why would you use class component over function components (removing hooks from the question)?
      Class components are preferred, before hooks are added to functional components, because class components can manage state inside the component.

- [ ] Name three lifecycle methods and their purposes.
      Render - This method is used to tell react some piece of DOM needs to be returned when the the above method is called.
      ComponentDidMount - This method is called as soon as the component is mounted, and it triggers the render method to be run every time it is called.
      ComponentDidUpdate - This method is invoked when an update happens. It can be used to set state based on the condition written inside the method.

- [ ] What is the purpose of a custom hook?
      Custom hooks make it possible to extract a component's logic into an externalized reusable function so that the logic can be used in other components without typing out all the code again.

- [ ] Why is it important to test our apps?
      It is important to test our apps because it helps developers to spot any mistakes before the app is deployed. It also makes sure that the app is functioning in its intended way, so that future changes can be implemented without messing the entire code base.
