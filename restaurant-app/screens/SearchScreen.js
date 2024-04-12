import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResult()
  const [term, setTerm] = useState("");

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price
    })
  }

  const giveWarning = (titleMessage, contentMessage) => {
    Alert.alert(
      titleMessage,
      contentMessage,
      [
        {
          text: 'Tamam',
        }
      ],
      { cancelable: false }
    )
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ?
        giveWarning(errorMessage, "Bağlantınızı Kontrol Ediniz!..")
        : (
          <>
            {results.length == 0 ? (
              giveWarning("Sonuç Bulunamadı!..","Başka bir arama deneyiniz!..")
            ) : (
              <>
                <ResultsList title={"Ucuz Restoranlar"} results={filterResultsByPrice("₺")} />
                <ResultsList title={"Uygun Restoranlar"} results={filterResultsByPrice("₺₺")} />
                <ResultsList title={"Pahalı Restoranlar"} results={filterResultsByPrice("₺₺₺")} />
              </>
            )}
          </>)}
    </View>
  );
}

const styles = StyleSheet.create({});
