import React, { useState, useEffect } from "react";
import CheckBox from "react-native-check-box";
import { addFilters, getFilters } from "../actions";
import { AsyncStorage } from "react-native";
import * as t from "../constants";


//viewsheet for the filter page 
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { color } from "../../../config/theme";

const DATA = [
  {
    id: "1",
    title: "Indoor",
  },
  {
    id: "2",
    title: "Outdoor",
  },
  {
    id: "3",
    title: "Free-hand",
  },
  {
    id: "4",
    title: "Gym",
  },
];

const Item = ({ title, falseIscheked, isChecked, leftText }) => (
  <View style={styles.item}>
    <CheckBox
      style={{ flex: 1, padding: 10 }}
      onClick={falseIscheked}
      isChecked={isChecked}
      leftText={leftText}
    />
  </View>
);

const FilteredList = (props) => {
  var filters = [];
  var initCheckboxArr = [];

  useEffect(() => {
    AsyncStorage.getItem(t.FILTER_KEY)
      .then((value) => {
        console.log("load from storage=" + value);
        filters = JSON.parse(value);
        initCheckboxArr = [];
        for (var dc = 0; dc < DATA.length; dc++) {
          var got = false;
          for (var f = 0; f < filters.length; f++) {
            if (DATA[dc].title.toLowerCase() == filters[f]) {
              got = true;
            }
          }
          initCheckboxArr.push(got);
        }
        console.log("call it:"+initCheckboxArr);
        setIsChecked(initCheckboxArr);
        setRenderIt(!renderIt);
      })
      .done();
  }, []);

  

  for (var dc = 0; dc < DATA.length; dc++) {
    var got = false;
    for (var f = 0; f < filters.length; f++) {
      if (DATA[dc].title.toLowerCase() == filters[f]) {
        got = true;
      }
    }
    initCheckboxArr.push(got);
  }
  console.log(initCheckboxArr);
  console.log("Filters = " + filters);

  const [isChecked, setIsChecked] = useState(initCheckboxArr);
  const [renderIt, setRenderIt] = useState(false);

  console.log("renderd ");

  //help rendering the items
  const renderItem = ({ item }) => (
    <Item
      falseIscheked={() => {
        falseIscheked(item.id);
      }}
      isChecked={isChecked[item.id - 1]}
      leftText={item.title}
    />
  );

  //set check box
  function falseIscheked(id) {
    var aa = isChecked;
    var filtersX = [];
    if (isChecked != null) {
      //isChecked[id-1]=!isChecked[id-1];
      for (var index = 0; index < isChecked.length; index++) {
        if (aa[index] == null) aa[index] = false;
        if (index == id - 1) aa[index] = !aa[index];
        if (aa[index] == true) filtersX.push(DATA[index].title.toLowerCase());
      }
    }
    setIsChecked(aa);
    setRenderIt(!renderIt);
    addFilters(filtersX);
    console.log(isChecked);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Filter the workouts you want to hide</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: color.underlayColor,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  heading: {
    fontSize: 32,
    marginRight: 20,
    marginLeft: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});

export default FilteredList;
