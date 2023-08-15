'use client'

import { useState } from 'react';


export const GetOptions = () => {
    
    const transmissionType = [
        // placeholder
      { label: 'Transmission..', id: '0' },
      { label: 'Manual', id: '1' },
      { label: 'Automatic', id: '2' },
    ]
  
    const fuelType = [
       // placeholder
      { label: 'Fuel..', id: '0' },
      { label: 'Petrol', id: '1' },
      { label: 'Diesel', id: '2' },
      { label: 'Electric', id: '3' },
      { label: 'Hybrid', id: '4' },
    ]
  
    const currentYear = new Date().getFullYear();
    const yearsArr = Array.from({ length: 90 }, (_, index) => currentYear - index);
  
    const yearsMap = [
      { id: '0', label: 'Year..' }, // Placeholder
      ...yearsArr.map((year, index) => ({
        id: (index + 1).toString(),
        label: year.toString(),
      })),
    ];

    const categoryType = [
            // placeholder
       { label: 'Category..', id: '0' },
       { label: 'Wagon', id: '1' },
       { label: 'Sedan', id: '2' },
       { label: 'Hatchback', id: '3' },
       { label: 'Coupe', id: '4' },
       { label: 'Convertible', id: '5' },
       { label: 'Van', id: '6' },
    ];

    const numDoors = [
            // placeholder
        {label: 'Number of doors..', id: '0'},
        {label: '2/3', id: '1'},
        {label: '4/5', id: '2'},
        {label: '6/7', id: '3'}
    ];

    const condition = [
            // placeholder
        {label: 'Condition..', id: '0'},
        {label: 'Used', id: '1'},
        {label: 'Brand new', id: '2'}
    ];

    const colors = [
            // placeholder
        { label: 'Color..', id: '0' },
        { label: 'White', id: '1' },
        { label: 'Black', id: '2' },
        { label: 'Brown', id: '3' },
        { label: 'Red', id: '4' },
        { label: 'Orange', id: '5' },
        { label: 'Yellow', id: '6' },
        { label: 'Green', id: '7' }, 
        { label: 'Blue', id: '8' }, 
        { label: 'Purple', id: '9' }, 
        { label: 'Pink', id: '10' }, 
        { label: 'Gray', id: '11' }, 
    ];

    const [carMakes, setCarMakes] = useState([
            { id: "0", label: 'Make..'},
            { id: "1", label: "Seat" },
            { id: "2", label: "Renault" },
            { id: "3", label: "Peugeot" },
            { id: "4", label: "Dacia" },
            { id: "5", label: "Citroen" },
            { id: "6", label: "Opel" },
            { id: "7", label: "Alfa Romeo" },
            { id: "8", label: "Skoda" },
            { id: "9", label: "Chevrolet" },
            { id: "10", label: "Porsche" },
            { id: "11", label: "Honda" },
            { id: "12", label: "Subaru" },
            { id: "13", label: "Mazda" },
            { id: "14", label: "Mitsubishi" },
            { id: "15", label: "Lexus" },
            { id: "16", label: "Toyota" },
            { id: "17", label: "BMW" },
            { id: "18", label: "Volkswagen" },
            { id: "19", label: "Suzuki" },
            { id: "20", label: "Mercedes-Benz" },
            { id: "21", label: "Saab" },
            { id: "22", label: "Audi" },
            { id: "23", label: "Kia" },
            { id: "24", label: "Land Rover" },
            { id: "25", label: "Dodge" },
            { id: "26", label: "Chrysler" },
            { id: "27", label: "Ford" },
            { id: "28", label: "Hummer" },
            { id: "29", label: "Hyundai" },
            { id: "30", label: "Infiniti" },
            { id: "31", label: "Jaguar" },
            { id: "32", label: "Jeep" },
            { id: "33", label: "Nissan" },
            { id: "34", label: "Volvo" },
            { id: "35", label: "Daewoo" },
            { id: "36", label: "Fiat" },
            { id: "37", label: "MINI" },
            { id: "38", label: "Rover" },
            { id: "39", label: "Smart" }
    ]);

    const [carModels, setCarModel] = useState([
        { label: 'Model..', id: '0', make: '' },
        { label: 'Alhambra', id: '2', make: 'Seat' },
        { label: 'Altea', id: '3', make: 'Seat' },
        { label: 'Altea XL', id: '4', make: 'Seat' },
        { label: 'Arosa', id: '5', make: 'Seat' },
        { label: 'Cordoba', id: '6', make: 'Seat' },
        { label: 'Captur', id: '7', make: 'Renault' },
        { label: 'Clio', id: '8', make: 'Renault' },
        { label: 'Clio Grandtour', id: '9', make: 'Renault' },
        { label: 'Espace', id: '10', make: 'Renault' },
        { label: 'Express', id: '11', make: 'Renault' },
        { label: '1007', id: '12', make: 'Peugeot' },
        { label: '107', id: '13', make: 'Peugeot' },
        { label: '106', id: '14', make: 'Peugeot' },
        { label: '108', id: '15', make: 'Peugeot' },
        { label: '2008', id: '16', make: 'Peugeot' },
        { label: 'Dokker', id: '17', make: 'Dacia' },
        { label: 'Duster', id: '18', make: 'Dacia' },
        { label: 'Lodgy', id: '19', make: 'Dacia' },
        { label: 'Logan', id: '20', make: 'Dacia' },
        { label: 'Logan MCV', id: '21', make: 'Dacia' },
        { label: 'Berlingo', id: '22', make: 'Citroen' },
        { label: 'C-Crosser', id: '23', make: 'Citroen' },
        { label: 'C-Elissee', id: '24', make: 'Citroen' },
        { label: 'C-Zero', id: '25', make: 'Citroen' },
        { label: 'C1', id: '26', make: 'Citroen' },
        { label: 'Agila', id: '27', make: 'Opel' },
        { label: 'Ampera', id: '28', make: 'Opel' },
        { label: 'Antara', id: '29', make: 'Opel' },
        { label: 'Astra', id: '30', make: 'Opel' },
        { label: 'Astra cabrio', id: '31', make: 'Opel' },
        { label: '145', id: '32', make: 'Alfa Romeo' },
        { label: '146', id: '33', make: 'Alfa Romeo' },
        { label: '147', id: '34', make: 'Alfa Romeo' },
        { label: '155', id: '35', make: 'Alfa Romeo' },
        { label: '156', id: '36', make: 'Alfa Romeo' },
        { label: 'Favorit', id: '37', make: 'Škoda' },
        { label: 'Felicia', id: '38', make: 'Škoda' },
        { label: 'Citigo', id: '39', make: 'Škoda' },
        { label: 'Fabia', id: '40', make: 'Škoda' },
        { label: 'Fabia Combi', id: '41', make: 'Škoda' },
        { label: 'Alero', id: '42', make: 'Chevrolet' },
        { label: 'Aveo', id: '43', make: 'Chevrolet' },
        { label: 'Camaro', id: '44', make: 'Chevrolet' },
        { label: 'Captiva', id: '45', make: 'Chevrolet' },
        { label: 'Corvette', id: '46', make: 'Chevrolet' },
        { label: '911 Carrera', id: '47', make: 'Porsche' },
        { label: '911 Carrera Cabrio', id: '48', make: 'Porsche' },
        { label: '911 Targa', id: '49', make: 'Porsche' },
        { label: '911 Turbo', id: '50', make: 'Porsche' },
        { label: '924', id: '51', make: 'Porsche' },
        { label: 'Accord', id: '52', make: 'Honda' },
        { label: 'Accord Coupe', id: '53', make: 'Honda' },
        { label: 'Accord Tourer', id: '54', make: 'Honda' },
        { label: 'City', id: '55', make: 'Honda' },
        { label: 'Civic', id: '56', make: 'Honda' },
        { label: 'BRZ', id: '57', make: 'Subaru' },
        { label: 'Forester', id: '58', make: 'Subaru' },
        { label: 'Impreza', id: '59', make: 'Subaru' },
        { label: 'Impreza Wagon', id: '60', make: 'Subaru' },
        { label: 'Justy', id: '61', make: 'Subaru' },
        { label: '121', id: '62', make: 'Mazda' },
        { label: '2', id: '63', make: 'Mazda' },
        { label: '3', id: '64', make: 'Mazda' },
        { label: '323', id: '65', make: 'Mazda' },
        { label: '323 Combi', id: '66', make: 'Mazda' },
        { label: '3000 GT', id: '67', make: 'Mitsubishi' },
        { label: 'ASX', id: '68', make: 'Mitsubishi' },
        { label: 'Carisma', id: '69', make: 'Mitsubishi' },
        { label: 'Colt', id: '70', make: 'Mitsubishi' },
        { label: 'Colt CC', id: '71', make: 'Mitsubishi' },
        { label: 'CT', id: '72', make: 'Lexus' },
        { label: 'GS', id: '73', make: 'Lexus' },
        { label: 'GS 300', id: '74', make: 'Lexus' },
        { label: 'GX', id: '75', make: 'Lexus' },
        { label: 'IS', id: '76', make: 'Lexus' },
        { label: '4-Runner', id: '77', make: 'Toyota' },
        { label: 'Auris', id: '78', make: 'Toyota' },
        { label: 'Avensis', id: '79', make: 'Toyota' },
        { label: 'Avensis Combi', id: '80', make: 'Toyota' },
        { label: 'Avensis Van Verso', id: '81', make: 'Toyota' },
        { label: 'B-Max', id: '82', make: 'Ford' },
        { label: 'C-Max', id: '83', make: 'Ford' },
        { label: 'Cortina', id: '84', make: 'Ford' },
        { label: 'Cougar', id: '85', make: 'Ford' },
        { label: 'Edge', id: '86', make: 'Ford' },
        { label: 'Accent', id: '87', make: 'Hyundai' },
        { label: 'Atos', id: '88', make: 'Hyundai' },
        { label: 'Atos Prime', id: '89', make: 'Hyundai' },
        { label: 'Coupe', id: '90', make: 'Hyundai' },
        { label: 'Elantra', id: '91', make: 'Hyundai' },
        { label: 'F-Pace', id: '92', make: 'Jaguar' },
        { label: 'F-Type', id: '93', make: 'Jaguar' },
        { label: 'S-Type', id: '94', make: 'Jaguar' },
        { label: 'Sovereign', id: '95', make: 'Jaguar' },
        { label: 'X-Type', id: '96', make: 'Jaguar' },
        { label: 'Cherokee', id: '97', make: 'Jeep' },
        { label: 'Commander', id: '98', make: 'Jeep' },
        { label: 'Compass', id: '99', make: 'Jeep' },
        { label: 'Grand Cherokee', id: '100', make: 'Jeep' },
        { label: 'Patriot', id: '101', make: 'Jeep' },
        { label: '100 NX', id: '102', make: 'Nissan' },
        { label: '200 SX', id: '103', make: 'Nissan' },
        { label: '350 Z', id: '104', make: 'Nissan' },
        { label: '350 Z Roadster', id: '105', make: 'Nissan' },
        { label: '370 Z', id: '106', make: 'Nissan' },
        { label: '240', id: '107', make: 'Volvo' },
        { label: '340', id: '108', make: 'Volvo' },
        { label: '360', id: '109', make: 'Volvo' },
        { label: '460', id: '110', make: 'Volvo' },
        { label: '850', id: '111', make: 'Volvo' },
        { label: 'Espero', id: '112', make: 'Daewoo' },
        { label: 'Kalos', id: '113', make: 'Daewoo' },
        { label: 'Lacetti', id: '114', make: 'Daewoo' },
        { label: 'Lanos', id: '115', make: 'Daewoo' },
        { label: 'Leganza', id: '116', make: 'Daewoo' },
        { label: '1100', id: '117', make: 'Fiat' },
        { label: '126', id: '118', make: 'Fiat' },
        { label: '500', id: '119', make: 'Fiat' },
        { label: '500L', id: '120', make: 'Fiat' },
        { label: '500X', id: '121', make: 'Fiat' },
        { label: 'Cabrio', id: '122', make: 'Smart' },
        { label: 'City-Coupe', id: '123', make: 'Smart' },
        { label: 'Compact Pulse', id: '124', make: 'Smart' },
        { label: 'Forfour', id: '125', make: 'Smart' },
        { label: 'Fortwo cabrio', id: '126', make: 'Smart' },
        { label: 'X1', id: '126', make: 'BMW' },
        { label: 'X3', id: '127', make: 'BMW' },
        { label: 'X6', id: '128', make: 'BMW' },
        { label: 'Z3', id: '129', make: 'BMW' },
        { label: 'E36', id: '130', make: 'BMW' },
        { label: 'E46', id: '131', make: 'BMW' },
        { label: 'E39', id: '132', make: 'BMW' },
        { label: '190E', id: '133', make: 'Mercedes-Benz' },
        { label: '190D', id: '134', make: 'Mercedes-Benz' },
        { label: '260 - 560 SEL', id: '135', make: 'Mercedes-Benz' },
        { label: '280D', id: '136', make: 'Mercedes-Benz' },
        { label: '280E', id: '137', make: 'Mercedes-Benz' },
        { label: '126', id: '138', make: 'Mercedes-Benz' },
        { label: 'Avella', id: '139', make: 'Kia' },
        { label: 'Besta', id: '140', make: 'Kia' },
        { label: 'Carens', id: '141', make: 'Kia' },
        { label: 'Carnival', id: '142', make: 'Kia' },
        { label: 'Ceed', id: '143', make: 'Kia' },
    ]);

    return {carMakes, carModels, yearsMap, fuelType, transmissionType, categoryType, numDoors, condition, colors}

}

export default GetOptions