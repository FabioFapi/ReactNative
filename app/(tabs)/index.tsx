import { Text, View, FlatList, ListRenderItem } from "react-native";
import { Card, cards } from "@/api/data.mock";
import { CardComponent } from "@/components/molecules/cardComponent/cardComponent.molecule";
import { useState } from "react";
import { ButtonComponent } from "@/components/atoms/button/button.atom";

export default function Index() {
  const[name, setName] = useState("Giorgia");

  const onPress = (): void => {
    setCounter((prevState) => (prevState + 1));
  };

  const onPress5 = (): void => {

    for(var i; i< 5; i++){
      onPress()
    }

  };

const onChangeName = () => {
  setName("Fabio")
};

  const user = useMemo(() => {
    return{
    name: name,
    surname:"Piazza",
    age:20,
  };
}, [name]);


return (
  <View style={{ flex: 1 , justifyContent: "center"}}>
    <Text style={{fontSize: 18, paddingVertical: 32, textAlign: "center"}}>{user.name}</Text>
    <ButtonComponent title="+1" onPress={onPress} disabled={false}></ButtonComponent>
    <ButtonComponent title="+5" onPress={onPress5} ></ButtonComponent>
  </View>
)
}