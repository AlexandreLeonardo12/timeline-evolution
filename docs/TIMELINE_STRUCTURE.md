# Timeline Component - JSON Data Structure

## Overview
The Timeline component dynamically fetches certification and training data from `/public/data/certifications.json`. This document outlines the required JSON structure for maintaining and updating timeline data.

## JSON Structure

### Root Object
```json
{
  "timeline": [
    // Array of timeline items
  ]
}
```

### Timeline Item Object
Each timeline item must include the following properties:

```json
{
  "id": number,           // Unique identifier for the item
  "title": string,        // Certification/training title
  "institution": string,  // Institution or organization name
  "date": string,         // ISO date format (YYYY-MM-DD)
  "status": string,       // Either "completed" or "planned"
  "description": string   // Brief description of the certification
}
```

### Property Specifications

#### `id` (required)
- **Type**: Number
- **Description**: Unique identifier for each timeline item
- **Example**: `1`, `2`, `3`

#### `title` (required)
- **Type**: String
- **Description**: The name or title of the certification/training
- **Example**: `"PMP – Project Management Professional"`

#### `institution` (required)
- **Type**: String
- **Description**: The organization or institution providing the certification
- **Example**: `"PMI"`, `"ISCTE Executive Education"`

#### `date` (required)
- **Type**: String
- **Format**: ISO date format (YYYY-MM-DD)
- **Description**: The completion date (for completed items) or planned date (for future items)
- **Example**: `"2022-07-01"`, `"2025-03-01"`

#### `status` (required)
- **Type**: String
- **Values**: `"completed"` or `"planned"`
- **Description**: Indicates whether the certification has been completed or is planned for the future
- **Visual Impact**: 
  - `"completed"`: Solid green circle with filled timeline
  - `"planned"`: Dashed outline circle with unfilled timeline

#### `description` (required)
- **Type**: String
- **Description**: Brief description explaining the certification's focus or importance
- **Example**: `"Certificação profissional reconhecida em gestão de projetos."`

## Complete Example

```json
{
  "timeline": [
    {
      "id": 1,
      "title": "Licenciatura em Administração Pública",
      "institution": "Universidade de Lisboa",
      "date": "2019-07-01",
      "status": "completed",
      "description": "Formação superior em administração pública."
    },
    {
      "id": 2,
      "title": "TOGAF 10 Foundation & Practitioner",
      "institution": "The Open Group",
      "date": "2024-10-01",
      "status": "planned",
      "description": "Framework líder mundial em arquitetura empresarial."
    }
  ]
}
```

## Timeline Logic

### Visual Representation
- **Completed items**: Display with solid green circles and contribute to the timeline fill
- **Planned items**: Display with dashed outline circles and appear after the timeline fill
- **Timeline fill**: Automatically calculated based on current date vs. item dates

### Sorting
Items are automatically sorted by date (earliest to latest) regardless of their order in the JSON file.

### Current Date Logic
The timeline visually fills up to the current date, clearly distinguishing between completed and future milestones.

## Updating Data

### Adding New Items
1. Add a new object to the `timeline` array with a unique `id`
2. Ensure all required properties are included
3. Use the correct date format (YYYY-MM-DD)
4. Set appropriate status (`"completed"` or `"planned"`)

### Modifying Existing Items
1. Locate the item by its `id`
2. Update the desired properties
3. Maintain the correct data types and formats

### Date Considerations
- Use the first day of the month for consistency (`YYYY-MM-01`)
- Ensure dates are realistic and properly sequenced
- Past dates should typically have `"status": "completed"`
- Future dates should have `"status": "planned"`

## File Location
The JSON file must be located at: `/public/data/certifications.json`

This location ensures the file is accessible via the public web path `/data/certifications.json`.