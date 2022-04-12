# BODY-FITNESS APP
 
# STAY FIT
## AN app made by using react native which helps you to chose your workouts according to your mood.
 
![logo](https://user-images.githubusercontent.com/56570461/162858154-42302102-8499-4e33-8fcb-ae3bf5b72d4e.PNG)
 
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
 
[![Build Status](https://github.com/RupkathaManzur/body-fitness-app.git)](https://github.com/RupkathaManzur/body-fitness-app.git)

## TABLE OF CONTENTS
 
 
 
- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨
 
## CONFIGURATION
This app has been tested on android devices. To run this app you will be needing a android 8.0 oreo or higher. Below this the app have not been tested.
 
 
## INSTALLATION
- If you want to download the app follow the instructions below.
1. Download the "EXPO GO" app in your mobile. You can find it in playstore.
2. Go to the QR scanner option and scan the QR code given below

![QRCODE](https://user-images.githubusercontent.com/56570461/162927677-0677bd94-c97a-41f8-be51-af316bf4f119.PNG)

 
 
- If you want to use the code / make changes to it, follow the mentioned steps. 
1. Open your terminal and then type 
   $ git clone { https://github.com/RupkathaManzur/body-fitness-app.git
}
 
 
2. `cd` into the new folder and type
    `$ npm install`
    This installs the required dependencies
    
3. To run the React project.
  `$ npm start`
  **You are done!** 
  Now you can start editing the React Native project in the new folder that's created.
 
 
## OPERATING INSTRUCTIONS
- When you will download the app and open it, it will automatically take you to the homescreen. 
<img src="https://user-images.githubusercontent.com/56570461/162876800-fb56ba23-a8d4-4994-9701-29043f6b6d55.jpg" width="250" >

- In the middle of the homescreen you will see there are exercises available for five body parts- whole body, hands, abdomen, legs and thigh and face. Tapping on any of the box will take you to a second page.
<img src="https://user-images.githubusercontent.com/56570461/162924297-32149c93-e867-4315-94bc-7f7ff51075ca.jpg" width="250" >

- Suppose you chose whole body. Whole body will have **3** different mode of exercise. They are easy, medium and hard. The time taken to complete each of the exercise differs by which the three modes are divided. Like this all the other body parts have 3 different modes. Accoring to your mood you can chose if you want to do more or less.
<img src="https://user-images.githubusercontent.com/56570461/162926070-7fa6b447-cf21-4953-8b85-5d861c8dd71e.jpg" width="250" >


- Suppose you chose medium, then the page with exercises of the whole body with medium intensity will come. You can also press next and change the pictures. It will contain the posture you need to do in each exercise.
<img src="https://user-images.githubusercontent.com/56570461/162927242-e1da4ec3-4cbf-4897-a8ff-f2b9c56a7203.jpg" width="250" >

- In the bottom of the homecreen there are three icons. The first one is for changing the page to homescreen, middle one to go to favourites page and last one is for filtering. If we go to the favouites page we will see there is no exercise at first.
<img src="https://user-images.githubusercontent.com/56570461/162929878-42e093ef-86c6-424f-86fd-168e67e87fc9.jpg" width="250" >

- Then if you add a exercise by pressing on the plus sign **+** above them then they will appear in your favourite list.
<img src="https://user-images.githubusercontent.com/56570461/162930254-258d1b0e-6b6f-4ae4-8213-d95f304cc7c7.jpg" width="250" >

- The filter page also have five options for you. If you have any problem you can cross out some exercises for yourself. They will not appear in your search list.
<img src="https://user-images.githubusercontent.com/56570461/162930635-f9ea2177-91b9-470c-b929-49c9238f2b93.jpg" width="250" >

- For example if you do not want to do any free hand exercise today and chose to filter out then you will be shown no face exercise in face section. Because all of them are free hand.
<img src="https://user-images.githubusercontent.com/56570461/162931295-48e49fcb-1f48-4367-8af9-a3e4d0eaf399.jpg" width="250" >





## LIST OF FILES!
|File Name       | Contents          |

|----------------|-------------------|
|**.expo-shared**|This file was automatically created while transferring files from expo to computer|
|**android**  | Automatically created while working in Expo CLI. |
| **app**      | This file has folders inside it which have sub folders. The folders are assets/images, components, config, modules/exercise, scenes|
| assets/images| contains the images of the homescreen|
| Components |  index.js (makes the design of homescreen) , styles.js (stylesheet for homescreen), TabIcon.js (stylesheet for icons).|
| Config     | data.json (contains the datas in the app. e.g exercise routines), theme.js (contains the oulook of the app like colour, app, fonts)|
|modules/exercise| Inside it we have components which has two files ExerciseItem and MuscleItem. Inside each of them there is a index.js and styles.js. First |    
| modules/exercise |ExerciseItem - index.js (contains the structure of the second page that is exercise mode page), styles.js (stylesheet for the exercise mode page) |
|modules/exericise| MuscleItem -index.js (structure of the third page where the exercise instruction is given) , styles.js (stylesheet for the exercise instruction page)
|modules/exericise -scenes  | The react native code which control each individual page is given here |
| scenes  | Exercise.js - controls the page which contains the exercise instruction |
| scenes  | Exercises.js- controls the page which has the three modes of exercise |
| scenes  | Filter.js - cotrols the filter page |
| scenes  | Main.js - controls the homescreen that is the mainpage |
| scenes  | Selected.js -control the favourites page | 
| scenes  | Styles.js - stylesheet for the filter and favourite page | 
| modules/exericise | action.js - contains the action of the buttons in the app. For example- error massages|
| modules/exericise | constants.js - This file was made for me to keep a track of the constants in the code |
| modules/exericise | index.js - To keep a track of exports and imports. Made for my usage. |
| modules/exericise | reducer.js - to keep the user choices in the memory after reading a file |
| redux | rootReducer.js - see description root reducer |
|redux   | store.js - see description redux store configuration |
| **assets** | contains some images, fonts and icons used in the app |
| **screenshots** | screenshot taken of different pages of the app |
| **README.md** | The file contains all the information about the app. Exactly, what you are reading right now. |
|  **App.js**    | automatically made by EXPO CLI|
| **app.json** | json code |
| **babel.config.js**| made automatically while tranferring from Expo CLI |
| **index.js** | comes with Expo CLI |
| **metro.config.js** | comes with Expo CLI |
| **package-lock.json** | comes with Expo CLI |
| **package.json** | comes with Expo CLI |
| **react-native.config.js** | comes with expo app |
| **yarn.lock** | _THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY._ |



### Directory Structure
  ```
  ├───assets
│   └───images
├───components
│   └───SharedComponents
├───config
├───modules
│   └───exercise
│       ├───components
│       │   ├───ExerciseItem
│       │   └───MuscleItem
│       └───scenes
└───redux
 
```

 ## Copyright information
 ## Contact information
 ## Bug list
 ## Troubleshooting tips


## Acknowledgements

