# Maktaba

The Maktaba website utilizes Canopy IIIF, an open-source static site generator built on Next.js, which is designed for fast creation, contextualization, and customization of a discovery-focused digital scholarship and collections website using [IIIF](https://iiif.io/) APIs.

- [Maktaba Documentation](/nulib-ds/maktaba/wiki) (Wiki)
- [Canopy Documentation](https://canopy-iiif.github.io/docs/)

## Setup

### Install Dependencies

```shell
# installation
npm i
```

### Running in Development

```shell
# development
npm run dev
```

### Building in Production

```shell
# build
npm run build
```

## Tests

To run Jest unit tests:

```shell
npm run test
```

## Configuration

The build process will read from a custom configuration file at `config/canopy.json` if it exists. See the [Create a Canopy Project guide](https://canopy-iiif.github.io/docs/get-started) for detailed step-by-step instructions.

## License

This project is [licensed](https://github.com/canopy-iiif/canopy-iiif/blob/main/LICENSE) under the MIT License.
