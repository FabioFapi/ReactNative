import { Text, View, FlatList, ListRenderItem } from "react-native";
import { Card, cards } from "@/api/data.mock";
import { CardComponent } from "@/components/molecules/cardComponent/cardComponent.molecule";
import { useState } from "react";
import { ButtonComponent } from "@/components/atoms/button/button.atom";

export default function Index() {
  const[counter, setCounter] = useState(0);
  const [resetCounter, setResetCounter] = useState(0);

  const onPress = (): void => {
    setCounter((prevState) => (prevState + 1));
    setResetCounter(0);
  };

  const resetOnPress = (): void => {
    setCounter((prevState) => (prevState = 0));
    setResetCounter(1);
  };


const renderItem: ListRenderItem<Card> = ({ item, index }) => {
  return (
    <CardComponent
      key={index}
      title={item.title}
      subTitle={item.subTitle}
      backgroundColor={item.backgroundColor}
      image={item.image}
    />
  );
};
const ItemSeparatorComponent = () => <View style={{ height: 16 }} />;
const ListHeaderComponent = () => {
  return (
    <Text style={{ fontSize: 24, paddingVertical: 16, textAlign: "center" }}>
      Le card di oggi:{" "}
    </Text>
  );
};
const ListFooterComponent = () => {
  return (
    <Text style={{ fontSize: 24, paddingVertical: 16, textAlign: "center" }}>
      Fine della lista
    </Text>
  );
};

const ListEmptyComponent = () => {
  return (
    <Text style={{ fontSize: 24, paddingVertical: 16, textAlign: "center" }}>
      Nessuna card da mostrare
    </Text>
  );
};
/*
export default function Index() {
  return (
    <FlatList
      style={{ flex: 1 }}
      bounces={false}
      data={cards}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
}
*/
return (
  <View style={{ flex: 1 , justifyContent: "center"}}>
    <Text style={{fontSize: 18, paddingVertical: 32, textAlign: "center"}}>Counter:{counter}</Text>
    <Text style={{fontSize: 18, paddingVertical: 32, textAlign: "center"}}>Fottiti { resetCounter == 1 ? " " : "non"}</Text>
    <ButtonComponent title="Finocchio" onPress={onPress} disabled={false}></ButtonComponent>
    <ButtonComponent title="Non Finocchio" onPress={resetOnPress} disabled={counter <= 9 ? true : false}></ButtonComponent>
  </View>
)
}