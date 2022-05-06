# Location-Based NFTs

## Problem Statement

Currently, the proposed metaverse has issues translating from the physical world to the virtual world. How do users of the metaverse apply a one-to-one translation from virtual items to physical items? With NFTs being the craze, there are still issues with them holding real-life value, rather than being just collector’s items. Our project aims to bridge the chasm between NFTs and the real world.

## Project Proposal

For the scope of this project, the project will encapsulate evaluating the current ERC-721 and ERC-1155 NFT standards. From these two contracts, an examination must be done on whether the metadata contains geolocation data. If it does, the project shall map the NFT into an interactive map (such as using the Google Maps API), and allow users to view the virtual collectibles on a relatively real map. If it does not, a new contract must be written and a standard must be adopted for adding geolocation metadata at the time of mint.

## Project Roadmap

- Evaluation of ERC-721 and ERC-1155 contracts
- Creation of new contract standard with geolocation data
- Create an interface to mint tokens
- Build interactive MapBox with NFT markers based on geolocation data
- Tie in augmented reality technology

## Tech Stack

- MapBox
- Typescript
- Loopring's Counterfactual NFTs
- DigitalOcean

## Architecture
![Architecture Diagram](./images/NFT%20Diagram.png)

### Loopring Notes

- NFT CID:

```
QmfYk75mcsGy9jqAKmi9vrfGLRYKF76PtMgoiu73Uf7iei
```

- Metadata CID:

```
QmX6Mnefu7GcBdc1qxEqZj9eQSjveqdDvfKn3aJ3abHy5B
```

Note that with the metadata. It's not exactly completely JSON. The `royalty_percentage` has to be encapsulated in quotes or minting will not work.
