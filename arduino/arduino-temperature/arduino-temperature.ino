#include <Adafruit_Sensor.h>
#include <DHT.h>

#define DHTPIN 4      // DHT pin
#define DHTTYPE DHT11 // DHT 11, DHT Sensor Type

DHT dht = DHT(DHTPIN, DHTTYPE); // Initialize DHT sensor

void setup()
{
  Serial.begin(9600); // Begin serial communication at baud rate 9600
  dht.begin();        // Setup sensor
}

void loop()
{
  delay(4000); // Wait between measurements

  float temperature = dht.readTemperature(); // Read the temperature
  float humidity = dht.readHumidity();       // Read the humidity

  // Check if any reads failed
  if (isnan(humidity) || isnan(temperature))
  {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Temperature: ");
  Serial.println(temperature);
  Serial.print("Humidity: ");
  Serial.println(humidity);
}
