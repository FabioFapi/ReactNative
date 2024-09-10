import React, {useState} from 'react';
import {SectionList, StyleSheet, Image, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';

const dataArray = [
  {
    title:"Gerry Scotti", subtitle:" Gerry Scotti, nato Virginio Scotti il 7 agosto 1956 a Miradolo Terme, è un popolare conduttore televisivo, attore e politico italiano. È noto per la sua lunga carriera in televisione, iniziata come conduttore radiofonico e proseguita con numerosi programmi di successo su Mediaset, tra cui quiz show come Chi vuol essere milionario? e Avanti un altro!. Grazie alla sua simpatia e alla sua capacità di mettere a proprio agio gli ospiti e il pubblico, Scotti è diventato una delle figure più amate del panorama televisivo italiano. Ha anche recitato in film e serie TV e ha avuto una breve esperienza in politica come deputato."
      , backgroundColor:"silver", imageRequire:"../assets/images/Gerry-Scotti.png"
  },
  {
    title:"Lino Banfi", subtitle:"Lino Banfi, pseudonimo di Pasquale Zagaria, è nato il 9 luglio 1936 ad Andria. È un celebre attore e comico italiano, noto per la sua lunga carriera nel cinema e in televisione. Banfi ha raggiunto la fama negli anni '70 e '80 con ruoli in commedie popolari, spesso interpretando personaggi divertenti e un po' buffi con il suo caratteristico accento pugliese. Tra i suoi film più noti ci sono L'allenatore nel pallone e Al bar dello sport. In televisione, ha ottenuto grande successo interpretando il nonno Libero nella serie Un medico in famiglia. Grazie alla sua simpatia e alla sua versatilità, Lino Banfi è diventato una figura amatissima dal pubblico italiano.",
     backgroundColor:"gold", imageRequire:"../assets/images/LinoBanfi.png"
  },
  {
    title:"Silvio Berlusconi", subtitle:" Silvio Berlusconi, nato Virginio Scotti il 7 agosto 1956 a Miradolo Terme, è un popolare conduttore televisivo, attore e politico italiano. È noto per la sua lunga carriera in televisione, iniziata come conduttore radiofonico e proseguita con numerosi programmi di successo su Mediaset, tra cui quiz show come Chi vuol essere milionario? e Avanti un altro!. Grazie alla sua simpatia e alla sua capacità di mettere a proprio agio gli ospiti e il pubblico, Scotti è diventato una delle figure più amate del panorama televisivo italiano. Ha anche recitato in film e serie TV e ha avuto una breve esperienza in politica come deputato."
      , backgroundColor:"lightblue", imageRequire:"../assets/images/Berlusca.png"
  },

];


const ListView = () => {
  return(
    <View style={{flex:1, justifyContent:"center" , alignItems: "center", paddingHorizontal: 16, gap:10 }}>
      <Text style={styles.textscroll}>Scroll me plz</Text>
      <FlatList
        data={dataArray}
        renderItem={({item}) => (
          <Card 
            title={item.title}
            subtitle={item.subtitle}
            backgroundColor={item.backgroundColor}
            imageRequire={item.imageRequire}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.textscroll}>Alvaro Soler</Text>
    </View>
  )
}

const Card = (props) => {
console.log(props.title)
console.log(props.subtitle)
console.log(props.backgroundColor)
console.log(props.imageRequire)

  return (

      <View style={{
        width:"100%",
        height: 400 ,
        borderRadius:15 ,
        flexDirection: "row",
        backgroundColor:props.backgroundColor,
        justifyContent:"center" ,
        alignItems: "center",
        padding:15,
        gap:15
             }}>

      <Image
      source= {props.imageRequire}
      style={styles.image}
    />
      
    <View style={styles.infoContainer}>
    
      <Text style={styles.name}>{props.title ?? 'Yomino' }</Text>
      <Text style={styles.description}>{props.subtitle  ?? 'Yomino'}
      </Text>
    </View>
    </View>

  );
}

const Main = () => {
  return (
    <ScrollView >

      <ListView />

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    overflow: 'hidden',
  },
  infoContainer: {
    flex:1
    
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },

  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  text:{
    color:"black",
    fontSize:20,
    fontWeight: 'bold'
  },
  image:{
    width:150,
     height:150,
     borderRadius:100,

  },
  textscroll:{
    fontSize:40
  }
});

export default Main;