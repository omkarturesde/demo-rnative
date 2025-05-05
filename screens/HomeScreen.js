import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import stockData from '../data/stockData';
import StockCard from '../components/StockCard';
import { colors } from '../constants/colors';


export default function HomeScreen() {
    const tabs = ['Home', 'NSE', 'BSE'];
    const [activeTab, setActiveTab] = React.useState('Home');
    const [searchText, setSearchText] = React.useState('');

    let tabData = stockData.stocks;
    if (activeTab === 'NSE') {
        tabData = stockData.stocks.slice(0, 5); // example
    } else if (activeTab === 'BSE') {
        tabData = stockData.stocks.slice(5); // example
    }

    const filteredData = tabData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchText.toLowerCase())
    );


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.search}
                placeholder="Search"
                placeholderTextColor="#888"
                value={searchText}
                onChangeText={setSearchText}
            />

            <View style={styles.tabRow}>
                {tabs.map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        style={activeTab === tab ? styles.activeTab : styles.tab}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text style={activeTab === tab ? styles.activeTabText : styles.tabText}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.topic}
                renderItem={({ item }) => <StockCard item={item} />}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        paddingTop: 50,
    },
    search: {
        backgroundColor: colors.lightGray,
        padding: 12,
        borderRadius: 10,
        color: colors.black,
        marginBottom: 20,
    },
    tabRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    tab: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: colors.lightGray,
    },
    activeTab: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: colors.blueLight,
        borderWidth: 1,
        borderColor: colors.blue,
    },
    tabText: {
        color: colors.darkGray,
    },
    activeTabText: {
        color: colors.blue,
        fontWeight: 'bold',
    },
});

