import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {formatearFecha} from '../helpers';

const InformacionPaciente = ({paciente, setModalPaciente}) => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Informacion {''}
        <Text style={styles.tituloBold}>Paciente</Text>
      </Text>

      <View>
        <Pressable
          style={styles.btnCerrar}
          onPress={() => setModalPaciente(false)}>
          <Text style={styles.btnCerrarTexto}> X Cerrar</Text>
        </Pressable>
      </View>

      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Paciente:</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.valor}>{paciente.email}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Telefono:</Text>
          <Text style={styles.valor}>{paciente.telefono}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Fecha Alta:</Text>
          <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Sintomas</Text>
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f59e0b',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
    fontWeight: '600',
    marginTop: 30,
  },
  tituloBold: {
    fontWeight: '900',
    color: '#fff',
  },
  btnCerrar: {
    backgroundColor: '#e06900',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  btnCerrarTexto: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  contenido: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  campo: {
    marginBottom: 10,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '700',
    fontSize: 12,
  },
  valor: {
    fontWeight: '700',
    fontSize: 20,
    color: '#334155',
  },
});

export default InformacionPaciente;
