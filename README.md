# IPFS-Store
Web shop that does not have a centralized database and uses blockchain for handling list items.

## Synpsis

There will be a top menu bar and a footer. On the top menu bar, there will be only 2 items in the beginning, a "Shop" button and an "About" button.
If the user clicks on the "Shop" button, the list elements will appear, with pictures. There is a basic picture, if there is no picture uploaded for the item (which will be the case for the first implementation of the smart contracts), then a default picture is used. If the user clicks on the item, the item will appear on full page, with description. There is a "BUY" button, but we don't know what the "BUY" button will do yet, somehow contact with the client and seller should be estabilished. It's clear that payment should be possible through Coinbase and/or MetaMask, but how communication will happen is a different issue. Adamant chat is a decentralized alternative, but it's not free, it is creating barriers for newcomers. Sending out an e-mail without a server is difficult.

With the smart contracts, the owner of the shop can upload new items. The ownership is transferable.

What fields does an item has?
 * name
 * description
 * price | what currency to show? Should we calculate price to fiat or not?
 * quantity | possible special cases like *infinite*

What functions will we need?

 * createNewItem()
 * changeQuantity()
 * DeleteItem()
 * TransferShopOwnership()
 * DeleteStore()