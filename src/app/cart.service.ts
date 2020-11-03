import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];

  constructor(private http: HttpClient) {}

  // menambahkan produk ke array items
  addToCart(product) {
    this.items.push(product);
  }

  // mengumpulkan item pengguna tambahkan ke keranjang dan mengembalikan
  // setiap item dengan kuantitas yang terkait
  getItems() {
    return this.items;
  }

  // mengembalikan array kosong item
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get("/assets/shipping.json"); // untuk mengambil data pengiriman
  }
}
