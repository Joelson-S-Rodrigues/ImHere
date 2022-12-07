import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
        
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },
    eventDate : {
        color: '#6B6B6B',
        fontSize: 16
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E37',
        borderRadius: 5,
        color: '#FDFCFE',
        padding: 16,
        fontSize: 16,
        marginRight: 2
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
    button: {
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 28
    },
    listEmptyText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
      },
      imageBack: {
        flex: 1,
        backgroundColor: 'transparent'
      }
})