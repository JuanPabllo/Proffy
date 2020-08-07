import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineicon from '../../assets/images/icons/heart-outline.png'
import unFavorite from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

function TeacherItem() {
    return (
    <View style={styles.container}>
        <View style={styles.profile}>
            <Image style={styles.avatar} source={{ uri: 'https://github.com/juanpabllo.png' }}/>

        <View style={styles.profileInfo}>
            <Text style={styles.name}>Juan Pablo</Text>
            <Text style={styles.subject}>Física</Text>
        </View>
        </View>

        <Text style={styles.bio}>Computer science student - IFMA. 
        {'\n'}{'\n'} 
        Currently focused on Front-end development. Passionate about doing things.</Text>

        <View style={styles.footer}>
            <Text style={styles.price}>
                Preço/hora {'   '}
                <Text style={styles.priceValue}>R$ 80,00</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton style={styles.favoriteButton}>
                    <Image source={heartOutlineicon}/>
                </RectButton>

                <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon}/>
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>
            </View>
        </View>
    </View>
    )
}

export default TeacherItem;