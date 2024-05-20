# Installing and Contributing to React Native Cascading Stylesheets

So you'd like to contribute to a library that strives to deliver a class based style system that includes minimally styled componets that extend meaningful interfaces for developers to control the predictable design of the primitive component? Then follow this guide on how to get set up and begin working in dev with the library.

## Set Up

### 1. Clone the repository
```sh
git clone https://github.com/colingoodale/react-native-cascading-styles.git
```

### 2. Install Dependencies
```sh
cd package
npm install
cd ../test-app
npm install
```

### 3. Build and Pack the package
This is a crucial step to seeing and testing your changes live. You may always create an expo app in the package directory itself, the .gitignore will ignore any testing app by that name. This way you can import the components directly. Any other names won't be included in the gitignore and be committed to the repo. PRs with a testing app in the package directory will be denied until it is cleaned from the commit. Likewise any commits that don't feature a new page in the test-app will be rejected until a screen is added with live examples of your feature.

#### 1. Run Package
This step creates a tarball.tgz for our package. This is incredibly important as Metro bundler will not accept TS files or a dist compiled javascript package. It needs to have a zipped package locally for it to be able to build our package into the bundle.

```sh
npm run package
cd ../test-app
npm i react-native-cascading-styles-{version-code}.tgz
npm run start
```

#### 2. Build new screen in expo app
We install our package into an expo app. This allows us to test our package in our app as well as give us a website that we can advertise our cool components with. This also creates a nice development environment for you in an app that is just like the apps that will use this app. Once your component is refined and accepted, the development screen will be promoted to a production screen and show off your component to anyone reading the live documentation.

```sh
cd ./test-app/app
mkdir {New-Feature-Name}
cdn {New-Feature-Name}
touch _layout.tsx index.tsx
```

Now that you have your screen and layout built, include a new link in the explore tab that directs the users to the new page. It should be empty or filled with whatever jsx you already put into index.tsx in the directory. Follow instructions here for how to use [Expo Router](https://docs.expo.dev/router/introduction/)

### 4. Build your Component

We want to build out components with some guiding principles in mind and this chedck list will help you do it. There will be this checklist in any PR that you spawn, but this is a useful place to keep up with dev. Feel free to copy and past this md so you can use this list interactively as you build your component.

### Always include and export a type interface with your component for props.

- [] I have build and exported an interface that handles the types for the component
- [] I have tested all my props and ensured that their type aligns with its usage and it is simple to understand each one

#### Build your component to be minimally styled and handle defaults in your props
 
 - [] I have built the component skeleton for my component
 - [] I have extended the styles to the props of the component to allow users to override with a prop
 - [] I have extended functions that can be passed to each internal component to the component props so that users can override with a prop
 - [] I have extended the accessibility props for each native component to the props of the component so users can override with a prop
 - [] I have ensured that users can override all pertinent props and functions with a well named prop and not a simple spread

#### Develop and Document your Component

- [] I have documented and tested all the aspects of my components
- [] I have clearly documented and explained the required props for my component
- [] I have listed and explained all the conditional props for the component
- [] I have included these as separate lists in the web page for my component in test-app
- [] If ther are overloads I have documented overloads consistent with MDN documentation styling.
- [] I have included at least one example of the component with a code sample and component render showing only the required props
- [] I have included at least one code example and one snack for each of the style props
- [] I have included at least one code example and one snack for each of the props in my component
- [] I have included a code example for accessibility props
- [] I have included testing-props  in all my components and a code example of the testingId props

### Test Your Component
- [] I have written basic rendering tests for the different style props my components accepts
- [] I have written Unit tests for the basic function of my components
- [] I have stubbed out and mocked the props for the component
- [] If my component includes api consumption and processing, I have included stubs and mocks for those endpoint exapmples
- [] My component renders and runs on ios, android, and web as expected and designed.

### Review your Component and get it accepted

- [] I have created a PR
- [] I have completed description and PR documentation
- [] I have tagged my PR properly
- [] I have asked for one contributor and one code owner review of the PR

## 5. Wait for Release
Your PR and Merge to main will get marked with a semver version change and will be released with that change. Releases are not automatic, and will be done as bundles. This is to ensure release testing and to make sure that codfe owners can verify that changes were made to only new contributions or documented changes to already existing primitices, styles, etc. 

## 6. Thank you for contributing
Thank you for your awesome work! Whether you're an experienced dev contributing your expertise or a newbie trying to push yourself, the effort is really appreciated.