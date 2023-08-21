import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({ positions }) {
    return (
        <MapContainer
            center={[positions[0].lat, positions[0].lng]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {positions.map((position, key) => (
                <Marker key={key} position={[position.lat, position.lng]}>
                    <Popup>
                        {<div>Razão social: {position.razaoSocial} </div>}
                        {<div>CNPJ: {position.cnpj}</div>}
                        {<div>Nome fantasia: {position.nomeFantasia}</div>}
                        {<div>E-mail: {position.email}</div>}
                        {position.telefone && (
                            <div>Telefone: {position.telefone}</div>
                        )}
                        {<div>Celular: {position.celular}</div>}
                        {<a href={`#${position.id}`}>Mais detalhes</a>}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Map;
