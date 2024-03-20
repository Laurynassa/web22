# Start 
```json
{npm i}
```
## Create a Client

- **Endpoint:** `/users`
- **Method:** `POST`
- **Description:** `Creates a new client`
- **Request Body:** `Include the following fields:`

```json
{
  "clientName": "John Doe",
  "clientPhone": "+1234567890"
}
```

## Create a Reservation

- **Endpoint:** `/reservations`
- **Method:** `POST`
- **Description:** `Creates a new reservation`
- **Request Body:** `Include the following fields:`

```json
{
  "kayak_id": "1,2,3",
  "client_id": "65f9954847aa4e831b3af8da",
  "date": "2024-03-20",
  "time": "10:00"
}
```