# TP2 - Implementation d'une architecture micro-services

Par Zayd Kassimi, eleve ingenieur en derniere annee a l'EMSI a Casablanca.

## Objectif

Creer une application basee sur une architecture micro-service qui permet de
gerer les factures contenant des produits et appartenant a un client.

## Ce que j'ai fait

1. **customer-service** (port 8081) : micro-service qui gere les clients.
   Entite Customer, CustomerRepository, service REST avec Spring Data REST.
2. **inventory-service** (port 8082) : micro-service qui gere les produits.
   Entite Product, ProductRepository, service REST avec Spring Data REST.
3. **gatewey-service** (port 8888) : Spring Cloud Gateway.
4. **Configuration statique du systeme de routage** : les routes sont
   definies dans `gatewey-service/src/main/resources/a.yml`.
5. **discovery-service** (port 8761) : annuaire Eureka Discovery Service.
   Les services sont visibles sur http://localhost:8761
6. **Configuration dynamique des routes de la gateway** : la gateway utilise
   le DiscoveryClientRouteDefinitionLocator et Eureka pour router les requetes.
7. **billing-service** (port 8083) : service de facturation, avec OpenFeign
   pour communiquer avec customer-service et inventory-service.
8. **config-service** (port 9999) : service de configuration centralisee.
   Il sert les fichiers de configuration du dossier `config-repo`.
9. **ecom-web-app** : client Angular qui affiche les clients, les produits
   et les factures en passant par la gateway.

## Technologies

Spring Boot 3.3.5, Java 21, Spring Cloud 2023.0.3 (Gateway, Eureka,
Config, OpenFeign), Spring Data JPA / REST, H2, Lombok, Angular 18.

## Comment demarrer

Demarrer les services dans cet ordre :

1. `discovery-service` : http://localhost:8761
2. `config-service` : http://localhost:9999 (a lancer depuis la racine du projet,
   il lit le dossier `config-repo`)
3. `customer-service` : http://localhost:8081
4. `inventory-service` : http://localhost:8082
5. `billing-service` : http://localhost:8083
6. `gatewey-service` : http://localhost:8888

Puis le client Angular :

```
cd ecom-web-app
npm install
ng serve
```

Le client est disponible sur http://localhost:4200

## Exemples de requetes via la gateway

- http://localhost:8888/customer-service/api/customers
- http://localhost:8888/inventory-service/api/products
- http://localhost:8888/billing-service/bills/1
- http://localhost:8761 (Eureka)
