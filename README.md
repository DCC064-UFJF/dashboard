# dashboard  
## Proposta 1: 
### Dashboard com ID's modularizados.  
Padrão:  
ABC001  
A : Circuito  
B : 0 = Atuador, 1 = Sensor;  
C : 0 = Atuador, 1 = Temperatura, 2 = Umidade etc.  
001 a 999: Individualização.  

O comportamento do middleware está sendo simulado por server2.js

para simular o middleware:    
**node server2.js**

### para alterar dados do sensor:  
(exemplo para sensor 212001 tendo valor alterado para 55.5)  

Invoke-RestMethod -Uri "http://localhost:3000/sensor/212001" -Method Patch -Headers @{"Content-Type"="application/json"} -Body '{"valor": 55.5}'  

## Rotas

Todos os devices (atuadores E sensores) devem ser alocados em:  
http://localhost:3000/sensores  

Dados individuais de cada device:  
http://localhost:3000/sensor/{deviceId}  

Alterar valor do atuador:  
http://localhost:3000/sensor/toggle/{deviceId}  

Histórico de dados dos sensores:  
http://localhost:3000/sensores/dados?id={sensorId}&from={from}&to={to}  

## Proposta 2:  
### ID's separados por circuitos

para simular o middleware executar:  
**node server2.js**

### para alterar dados do sensor:  
(exemplo para sensor de id 3 do circuito 1 tendo valor alterado para 50)  

Invoke-WebRequest -Uri http://localhost:5001/circuits/1/sensor/3/update -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"valor": 50.0}'  

## Rotas  

Lista de circuitos:  
http://localhost:5001/circuits  

Listar dispositivos de cada circuito:  
http://localhost:5001/circuits/{circuit_id}/devices  

Último valor do sensor:  
http://localhost:5001/circuits/{circuit_id}/sensor/{sensor_id}/last  

Último valor do atuador:  
http://localhost:5001/circuits/{circuit_id}/actuator/{actuator_id}/last  

Alterar valor do atuador:  
http://localhost:5001/circuits/{circuitId}/actuator/{actuatorId}/toggle  

Histórico de dados do sensor:  
http://localhost:5001/circuits/{circuit_id}/sensor/{sensor_id}/all?start_date={start_date}&end_date={end_date}  

Para gerar a imagem:
docker build . -t dashboard

Para gerar o container: 
docker container run -p 1880:1880 dashboard

Imagem do dashboard no DockerHub: gabrielpiresf/dashboard:latest

Para o correto funcionamento dos gráficos, alocar os dados na rota:
http://localhost:5001/circuits/{circuitId}/devices

O formato do JSON utilizado deve ser:

```json 
{
    "circuito_id": "1",
    "id": 13,
    "tipo": "Temperatura",
    "registros": [
      {
        "timestamp": "2025-03-10T18:15:57.969Z",
        "valor": 66.07
      },
      {
        "timestamp": "2025-03-13T19:00:11.593Z",
        "valor": 51.22
      },
      {
        "timestamp": "2025-03-13T19:33:58.824Z",
        "valor": 83.33
      },
      {
        "timestamp": "2025-03-18T12:23:18.251Z",
        "valor": 37.69
      },
      {
        "timestamp": "2025-03-19T03:28:07.111Z",
        "valor": 95.65
      },
      {
        "timestamp": "2025-03-19T22:33:09.145Z",
        "valor": 19.83
      },
      {
        "timestamp": "2025-03-20T06:50:15.453Z",
        "valor": 17.12
      },
      {
        "timestamp": "2025-03-20T17:44:21.263Z",
        "valor": 93.04
      },
      {
        "timestamp": "2025-03-20T23:17:44.994Z",
        "valor": 81.45
      }
    ]
  },
  {
    "circuito_id": "1",
    "id": 16,
    "tipo": "Humidade",
    "registros": [
      {
        "timestamp": "2025-03-12T03:08:33.524Z",
        "valor": 24.02
      },
      {
        "timestamp": "2025-03-12T08:36:58.077Z",
        "valor": 9.09
      },
      {
        "timestamp": "2025-03-12T19:11:35.702Z",
        "valor": 65.81
      },
      {
        "timestamp": "2025-03-14T23:18:05.039Z",
        "valor": 13.75
      },
      {
        "timestamp": "2025-03-16T04:38:41.286Z",
        "valor": 19.48
      },
      {
        "timestamp": "2025-03-16T10:44:43.212Z",
        "valor": 18.6
      },
      {
        "timestamp": "2025-03-18T06:27:44.528Z",
        "valor": 67.45
      },
      {
        "timestamp": "2025-03-20T10:14:00.794Z",
        "valor": 42.21
      }
    ]
  }


