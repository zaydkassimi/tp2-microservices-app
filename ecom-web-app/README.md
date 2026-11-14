# ecom-web-app

Angular client for the TP2 micro-services application.

Run `ng serve` and open http://localhost:4200

The client calls the micro-services through the gateway (http://localhost:8888):
- Customers : http://localhost:8888/customer-service/api/customers
- Products : http://localhost:8888/inventory-service/api/products
- Bills : http://localhost:8888/billing-service/bills/{id}
