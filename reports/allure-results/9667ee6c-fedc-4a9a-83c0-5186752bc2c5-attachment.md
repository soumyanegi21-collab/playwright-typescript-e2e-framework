# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\shopping-cart.spec.ts >> Test Cases 12 and 17: add and remove a product from the cart
- Location: tests\ui\shopping-cart.spec.ts:7:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#cartModal').getByRole('link', { name: 'View Cart', exact: true }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - banner [ref=f1e2]:
    - generic [ref=f1e5]:
      - link [ref=f1e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f1e9]
      - list [ref=f1e12]:
        - listitem [ref=f1e13]:
          - link " Home" [ref=f1e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f1e15]: 
            - text: Home
        - listitem [ref=f1e16]:
          - link " Products" [ref=f1e17] [cursor=pointer]:
            - /url: /products
        - listitem [ref=f1e18]:
          - link " Cart" [ref=f1e19] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f1e20]: 
            - text: Cart
        - listitem [ref=f1e21]:
          - link " Signup / Login" [ref=f1e22] [cursor=pointer]:
            - /url: /login
            - generic [ref=f1e23]: 
            - text: Signup / Login
        - listitem [ref=f1e24]:
          - link " Test Cases" [ref=f1e25] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f1e26]: 
            - text: Test Cases
        - listitem [ref=f1e27]:
          - link " API Testing" [ref=f1e28] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f1e29]: 
            - text: API Testing
        - listitem [ref=f1e30]:
          - link " Video Tutorials" [ref=f1e31] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f1e32]: 
            - text: Video Tutorials
        - listitem [ref=f1e33]:
          - link " Contact us" [ref=f1e34] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f1e35]: 
            - text: Contact us
  - generic [ref=f1e37]:
    - img "Website for practice" [ref=f1e38]
    - textbox "Search Product" [ref=f1e39]
    - button "" [ref=f1e40] [cursor=pointer]
  - generic [ref=f1e44]:
    - generic [ref=f1e46]:
      - heading "Category" [level=2] [ref=f1e47]
      - generic [ref=f1e48]:
        - heading [level=4] [ref=f1e51]:
          - link " Women" [ref=f1e52] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=f1e53]: 
            - text: Women
        - heading [level=4] [ref=f1e57]:
          - link " Men" [ref=f1e58] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=f1e59]: 
            - text: Men
        - heading [level=4] [ref=f1e63]:
          - link " Kids" [ref=f1e64] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=f1e65]: 
            - text: Kids
      - generic [ref=f1e67]:
        - heading "Brands" [level=2] [ref=f1e68]
        - list [ref=f1e70]:
          - listitem [ref=f1e71]:
            - link "(6) Polo" [ref=f1e72] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=f1e73]: (6)
              - text: Polo
          - listitem [ref=f1e74]:
            - link "(5) H&M" [ref=f1e75] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=f1e76]: (5)
              - text: H&M
          - listitem [ref=f1e77]:
            - link "(5) Madame" [ref=f1e78] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=f1e79]: (5)
              - text: Madame
          - listitem [ref=f1e80]:
            - link "(3) Mast & Harbour" [ref=f1e81] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=f1e82]: (3)
              - text: Mast & Harbour
          - listitem [ref=f1e83]:
            - link "(4) Babyhug" [ref=f1e84] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=f1e85]: (4)
              - text: Babyhug
          - listitem [ref=f1e86]:
            - link "(3) Allen Solly Junior" [ref=f1e87] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=f1e88]: (3)
              - text: Allen Solly Junior
          - listitem [ref=f1e89]:
            - link "(3) Kookie Kids" [ref=f1e90] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=f1e91]: (3)
              - text: Kookie Kids
          - listitem [ref=f1e92]:
            - link "(5) Biba" [ref=f1e93] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=f1e94]: (5)
              - text: Biba
    - generic [ref=f1e96]:
      - heading "All Products" [level=2] [ref=f1e97]
      - generic [ref=f1e99]:
        - generic [ref=f1e100]:
          - generic [ref=f1e101]:
            - img "ecommerce website products" [ref=f1e102]
            - heading "Rs. 500" [level=2] [ref=f1e103]
            - paragraph [ref=f1e104]: Blue Top
            - generic [ref=f1e105] [cursor=pointer]:
              - generic [ref=f1e106]: 
              - text: Add to cart
          - generic [ref=f1e108]:
            - heading "Rs. 500" [level=2] [ref=f1e109]
            - paragraph [ref=f1e110]: Blue Top
            - generic [ref=f1e111] [cursor=pointer]:
              - generic [ref=f1e112]: 
              - text: Add to cart
        - list [ref=f1e114]:
          - listitem [ref=f1e115]:
            - link " View Product" [ref=f1e116] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=f1e117]: 
              - text: View Product
      - generic [ref=f1e119]:
        - generic [ref=f1e120]:
          - generic [ref=f1e121]:
            - img "ecommerce website products" [ref=f1e122]
            - heading "Rs. 400" [level=2] [ref=f1e123]
            - paragraph [ref=f1e124]: Men Tshirt
            - generic [ref=f1e125] [cursor=pointer]:
              - generic [ref=f1e126]: 
              - text: Add to cart
          - generic [ref=f1e127]:
            - heading "Rs. 400" [level=2] [ref=f1e128]
            - paragraph [ref=f1e129]: Men Tshirt
            - generic [ref=f1e130] [cursor=pointer]:
              - generic [ref=f1e131]: 
              - text: Add to cart
        - list [ref=f1e133]:
          - listitem [ref=f1e134]:
            - link " View Product" [ref=f1e135] [cursor=pointer]:
              - /url: /product_details/2
              - generic [ref=f1e136]: 
              - text: View Product
      - generic [ref=f1e138]:
        - generic [ref=f1e139]:
          - generic [ref=f1e140]:
            - img "ecommerce website products" [ref=f1e141]
            - heading "Rs. 1000" [level=2] [ref=f1e142]
            - paragraph [ref=f1e143]: Sleeveless Dress
            - generic [ref=f1e144] [cursor=pointer]:
              - generic [ref=f1e145]: 
              - text: Add to cart
          - generic [ref=f1e146]:
            - heading "Rs. 1000" [level=2] [ref=f1e147]
            - paragraph [ref=f1e148]: Sleeveless Dress
            - generic [ref=f1e149] [cursor=pointer]:
              - generic [ref=f1e150]: 
              - text: Add to cart
        - list [ref=f1e152]:
          - listitem [ref=f1e153]:
            - link " View Product" [ref=f1e154] [cursor=pointer]:
              - /url: /product_details/3
              - generic [ref=f1e155]: 
              - text: View Product
      - generic [ref=f1e157]:
        - generic [ref=f1e158]:
          - generic [ref=f1e159]:
            - img "ecommerce website products" [ref=f1e160]
            - heading "Rs. 1500" [level=2] [ref=f1e161]
            - paragraph [ref=f1e162]: Stylish Dress
            - generic [ref=f1e163] [cursor=pointer]:
              - generic [ref=f1e164]: 
              - text: Add to cart
          - generic [ref=f1e165]:
            - heading "Rs. 1500" [level=2] [ref=f1e166]
            - paragraph [ref=f1e167]: Stylish Dress
            - generic [ref=f1e168] [cursor=pointer]:
              - generic [ref=f1e169]: 
              - text: Add to cart
        - list [ref=f1e171]:
          - listitem [ref=f1e172]:
            - link " View Product" [ref=f1e173] [cursor=pointer]:
              - /url: /product_details/4
              - generic [ref=f1e174]: 
              - text: View Product
      - generic [ref=f1e176]:
        - generic [ref=f1e177]:
          - generic [ref=f1e178]:
            - img "ecommerce website products" [ref=f1e179]
            - heading "Rs. 600" [level=2] [ref=f1e180]
            - paragraph [ref=f1e181]: Winter Top
            - generic [ref=f1e182] [cursor=pointer]:
              - generic [ref=f1e183]: 
              - text: Add to cart
          - generic [ref=f1e184]:
            - heading "Rs. 600" [level=2] [ref=f1e185]
            - paragraph [ref=f1e186]: Winter Top
            - generic [ref=f1e187] [cursor=pointer]:
              - generic [ref=f1e188]: 
              - text: Add to cart
        - list [ref=f1e190]:
          - listitem [ref=f1e191]:
            - link " View Product" [ref=f1e192] [cursor=pointer]:
              - /url: /product_details/5
              - generic [ref=f1e193]: 
              - text: View Product
      - generic [ref=f1e195]:
        - generic [ref=f1e196]:
          - generic [ref=f1e197]:
            - img "ecommerce website products" [ref=f1e198]
            - heading "Rs. 400" [level=2] [ref=f1e199]
            - paragraph [ref=f1e200]: Summer White Top
            - generic [ref=f1e201] [cursor=pointer]:
              - generic [ref=f1e202]: 
              - text: Add to cart
          - generic [ref=f1e203]:
            - heading "Rs. 400" [level=2] [ref=f1e204]
            - paragraph [ref=f1e205]: Summer White Top
            - generic [ref=f1e206] [cursor=pointer]:
              - generic [ref=f1e207]: 
              - text: Add to cart
        - list [ref=f1e209]:
          - listitem [ref=f1e210]:
            - link " View Product" [ref=f1e211] [cursor=pointer]:
              - /url: /product_details/6
              - generic [ref=f1e212]: 
              - text: View Product
      - generic [ref=f1e214]:
        - generic [ref=f1e215]:
          - generic [ref=f1e216]:
            - img "ecommerce website products" [ref=f1e217]
            - heading "Rs. 1000" [level=2] [ref=f1e218]
            - paragraph [ref=f1e219]: Madame Top For Women
            - generic [ref=f1e220] [cursor=pointer]:
              - generic [ref=f1e221]: 
              - text: Add to cart
          - generic [ref=f1e222]:
            - heading "Rs. 1000" [level=2] [ref=f1e223]
            - paragraph [ref=f1e224]: Madame Top For Women
            - generic [ref=f1e225] [cursor=pointer]:
              - generic [ref=f1e226]: 
              - text: Add to cart
        - list [ref=f1e228]:
          - listitem [ref=f1e229]:
            - link " View Product" [ref=f1e230] [cursor=pointer]:
              - /url: /product_details/7
              - generic [ref=f1e231]: 
              - text: View Product
      - generic [ref=f1e233]:
        - generic [ref=f1e234]:
          - generic [ref=f1e235]:
            - img "ecommerce website products" [ref=f1e236]
            - heading "Rs. 700" [level=2] [ref=f1e237]
            - paragraph [ref=f1e238]: Fancy Green Top
            - generic [ref=f1e239] [cursor=pointer]:
              - generic [ref=f1e240]: 
              - text: Add to cart
          - generic [ref=f1e241]:
            - heading "Rs. 700" [level=2] [ref=f1e242]
            - paragraph [ref=f1e243]: Fancy Green Top
            - generic [ref=f1e244] [cursor=pointer]:
              - generic [ref=f1e245]: 
              - text: Add to cart
        - list [ref=f1e247]:
          - listitem [ref=f1e248]:
            - link " View Product" [ref=f1e249] [cursor=pointer]:
              - /url: /product_details/8
              - generic [ref=f1e250]: 
              - text: View Product
      - generic [ref=f1e252]:
        - generic [ref=f1e253]:
          - generic [ref=f1e254]:
            - img "ecommerce website products" [ref=f1e255]
            - heading "Rs. 499" [level=2] [ref=f1e256]
            - paragraph [ref=f1e257]: Sleeves Printed Top - White
            - generic [ref=f1e258] [cursor=pointer]:
              - generic [ref=f1e259]: 
              - text: Add to cart
          - generic [ref=f1e260]:
            - heading "Rs. 499" [level=2] [ref=f1e261]
            - paragraph [ref=f1e262]: Sleeves Printed Top - White
            - generic [ref=f1e263] [cursor=pointer]:
              - generic [ref=f1e264]: 
              - text: Add to cart
        - list [ref=f1e266]:
          - listitem [ref=f1e267]:
            - link " View Product" [ref=f1e268] [cursor=pointer]:
              - /url: /product_details/11
              - generic [ref=f1e269]: 
              - text: View Product
      - generic [ref=f1e271]:
        - generic [ref=f1e272]:
          - generic [ref=f1e273]:
            - img "ecommerce website products" [ref=f1e274]
            - heading "Rs. 359" [level=2] [ref=f1e275]
            - paragraph [ref=f1e276]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=f1e277] [cursor=pointer]:
              - generic [ref=f1e278]: 
              - text: Add to cart
          - generic [ref=f1e279]:
            - heading "Rs. 359" [level=2] [ref=f1e280]
            - paragraph [ref=f1e281]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=f1e282] [cursor=pointer]:
              - generic [ref=f1e283]: 
              - text: Add to cart
        - list [ref=f1e285]:
          - listitem [ref=f1e286]:
            - link " View Product" [ref=f1e287] [cursor=pointer]:
              - /url: /product_details/12
              - generic [ref=f1e288]: 
              - text: View Product
      - generic [ref=f1e290]:
        - generic [ref=f1e291]:
          - generic [ref=f1e292]:
            - img "ecommerce website products" [ref=f1e293]
            - heading "Rs. 278" [level=2] [ref=f1e294]
            - paragraph [ref=f1e295]: Frozen Tops For Kids
            - generic [ref=f1e296] [cursor=pointer]:
              - generic [ref=f1e297]: 
              - text: Add to cart
          - generic [ref=f1e298]:
            - heading "Rs. 278" [level=2] [ref=f1e299]
            - paragraph [ref=f1e300]: Frozen Tops For Kids
            - generic [ref=f1e301] [cursor=pointer]:
              - generic [ref=f1e302]: 
              - text: Add to cart
        - list [ref=f1e304]:
          - listitem [ref=f1e305]:
            - link " View Product" [ref=f1e306] [cursor=pointer]:
              - /url: /product_details/13
              - generic [ref=f1e307]: 
              - text: View Product
      - generic [ref=f1e309]:
        - generic [ref=f1e310]:
          - generic [ref=f1e311]:
            - img "ecommerce website products" [ref=f1e312]
            - heading "Rs. 679" [level=2] [ref=f1e313]
            - paragraph [ref=f1e314]: Full Sleeves Top Cherry - Pink
            - generic [ref=f1e315] [cursor=pointer]:
              - generic [ref=f1e316]: 
              - text: Add to cart
          - generic [ref=f1e317]:
            - heading "Rs. 679" [level=2] [ref=f1e318]
            - paragraph [ref=f1e319]: Full Sleeves Top Cherry - Pink
            - generic [ref=f1e320] [cursor=pointer]:
              - generic [ref=f1e321]: 
              - text: Add to cart
        - list [ref=f1e323]:
          - listitem [ref=f1e324]:
            - link " View Product" [ref=f1e325] [cursor=pointer]:
              - /url: /product_details/14
              - generic [ref=f1e326]: 
              - text: View Product
      - generic [ref=f1e328]:
        - generic [ref=f1e329]:
          - generic [ref=f1e330]:
            - img "ecommerce website products" [ref=f1e331]
            - heading "Rs. 315" [level=2] [ref=f1e332]
            - paragraph [ref=f1e333]: Printed Off Shoulder Top - White
            - generic [ref=f1e334] [cursor=pointer]:
              - generic [ref=f1e335]: 
              - text: Add to cart
          - generic [ref=f1e336]:
            - heading "Rs. 315" [level=2] [ref=f1e337]
            - paragraph [ref=f1e338]: Printed Off Shoulder Top - White
            - generic [ref=f1e339] [cursor=pointer]:
              - generic [ref=f1e340]: 
              - text: Add to cart
        - list [ref=f1e342]:
          - listitem [ref=f1e343]:
            - link " View Product" [ref=f1e344] [cursor=pointer]:
              - /url: /product_details/15
              - generic [ref=f1e345]: 
              - text: View Product
      - generic [ref=f1e347]:
        - generic [ref=f1e348]:
          - generic [ref=f1e349]:
            - img "ecommerce website products" [ref=f1e350]
            - heading "Rs. 478" [level=2] [ref=f1e351]
            - paragraph [ref=f1e352]: Sleeves Top and Short - Blue & Pink
            - generic [ref=f1e353] [cursor=pointer]:
              - generic [ref=f1e354]: 
              - text: Add to cart
          - generic [ref=f1e355]:
            - heading "Rs. 478" [level=2] [ref=f1e356]
            - paragraph [ref=f1e357]: Sleeves Top and Short - Blue & Pink
            - generic [ref=f1e358] [cursor=pointer]:
              - generic [ref=f1e359]: 
              - text: Add to cart
        - list [ref=f1e361]:
          - listitem [ref=f1e362]:
            - link " View Product" [ref=f1e363] [cursor=pointer]:
              - /url: /product_details/16
              - generic [ref=f1e364]: 
              - text: View Product
      - generic [ref=f1e366]:
        - generic [ref=f1e367]:
          - generic [ref=f1e368]:
            - img "ecommerce website products" [ref=f1e369]
            - heading "Rs. 1200" [level=2] [ref=f1e370]
            - paragraph [ref=f1e371]: Little Girls Mr. Panda Shirt
            - generic [ref=f1e372] [cursor=pointer]:
              - generic [ref=f1e373]: 
              - text: Add to cart
          - generic [ref=f1e374]:
            - heading "Rs. 1200" [level=2] [ref=f1e375]
            - paragraph [ref=f1e376]: Little Girls Mr. Panda Shirt
            - generic [ref=f1e377] [cursor=pointer]:
              - generic [ref=f1e378]: 
              - text: Add to cart
        - list [ref=f1e380]:
          - listitem [ref=f1e381]:
            - link " View Product" [ref=f1e382] [cursor=pointer]:
              - /url: /product_details/18
              - generic [ref=f1e383]: 
              - text: View Product
      - generic [ref=f1e385]:
        - generic [ref=f1e386]:
          - generic [ref=f1e387]:
            - img "ecommerce website products" [ref=f1e388]
            - heading "Rs. 1050" [level=2] [ref=f1e389]
            - paragraph [ref=f1e390]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=f1e391] [cursor=pointer]:
              - generic [ref=f1e392]: 
              - text: Add to cart
          - generic [ref=f1e393]:
            - heading "Rs. 1050" [level=2] [ref=f1e394]
            - paragraph [ref=f1e395]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=f1e396] [cursor=pointer]:
              - generic [ref=f1e397]: 
              - text: Add to cart
        - list [ref=f1e399]:
          - listitem [ref=f1e400]:
            - link " View Product" [ref=f1e401] [cursor=pointer]:
              - /url: /product_details/19
              - generic [ref=f1e402]: 
              - text: View Product
      - generic [ref=f1e404]:
        - generic [ref=f1e405]:
          - generic [ref=f1e406]:
            - img "ecommerce website products" [ref=f1e407]
            - heading "Rs. 1190" [level=2] [ref=f1e408]
            - paragraph [ref=f1e409]: Cotton Mull Embroidered Dress
            - generic [ref=f1e410] [cursor=pointer]:
              - generic [ref=f1e411]: 
              - text: Add to cart
          - generic [ref=f1e412]:
            - heading "Rs. 1190" [level=2] [ref=f1e413]
            - paragraph [ref=f1e414]: Cotton Mull Embroidered Dress
            - generic [ref=f1e415] [cursor=pointer]:
              - generic [ref=f1e416]: 
              - text: Add to cart
        - list [ref=f1e418]:
          - listitem [ref=f1e419]:
            - link " View Product" [ref=f1e420] [cursor=pointer]:
              - /url: /product_details/20
              - generic [ref=f1e421]: 
              - text: View Product
      - generic [ref=f1e423]:
        - generic [ref=f1e424]:
          - generic [ref=f1e425]:
            - img "ecommerce website products" [ref=f1e426]
            - heading "Rs. 1530" [level=2] [ref=f1e427]
            - paragraph [ref=f1e428]: Blue Cotton Indie Mickey Dress
            - generic [ref=f1e429] [cursor=pointer]:
              - generic [ref=f1e430]: 
              - text: Add to cart
          - generic [ref=f1e431]:
            - heading "Rs. 1530" [level=2] [ref=f1e432]
            - paragraph [ref=f1e433]: Blue Cotton Indie Mickey Dress
            - generic [ref=f1e434] [cursor=pointer]:
              - generic [ref=f1e435]: 
              - text: Add to cart
        - list [ref=f1e437]:
          - listitem [ref=f1e438]:
            - link " View Product" [ref=f1e439] [cursor=pointer]:
              - /url: /product_details/21
              - generic [ref=f1e440]: 
              - text: View Product
      - generic [ref=f1e442]:
        - generic [ref=f1e443]:
          - generic [ref=f1e444]:
            - img "ecommerce website products" [ref=f1e445]
            - heading "Rs. 1600" [level=2] [ref=f1e446]
            - paragraph [ref=f1e447]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=f1e448] [cursor=pointer]:
              - generic [ref=f1e449]: 
              - text: Add to cart
          - generic [ref=f1e450]:
            - heading "Rs. 1600" [level=2] [ref=f1e451]
            - paragraph [ref=f1e452]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=f1e453] [cursor=pointer]:
              - generic [ref=f1e454]: 
              - text: Add to cart
        - list [ref=f1e456]:
          - listitem [ref=f1e457]:
            - link " View Product" [ref=f1e458] [cursor=pointer]:
              - /url: /product_details/22
              - generic [ref=f1e459]: 
              - text: View Product
      - generic [ref=f1e461]:
        - generic [ref=f1e462]:
          - generic [ref=f1e463]:
            - img "ecommerce website products" [ref=f1e464]
            - heading "Rs. 1100" [level=2] [ref=f1e465]
            - paragraph [ref=f1e466]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=f1e467] [cursor=pointer]:
              - generic [ref=f1e468]: 
              - text: Add to cart
          - generic [ref=f1e469]:
            - heading "Rs. 1100" [level=2] [ref=f1e470]
            - paragraph [ref=f1e471]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=f1e472] [cursor=pointer]:
              - generic [ref=f1e473]: 
              - text: Add to cart
        - list [ref=f1e475]:
          - listitem [ref=f1e476]:
            - link " View Product" [ref=f1e477] [cursor=pointer]:
              - /url: /product_details/23
              - generic [ref=f1e478]: 
              - text: View Product
      - generic [ref=f1e480]:
        - generic [ref=f1e481]:
          - generic [ref=f1e482]:
            - img "ecommerce website products" [ref=f1e483]
            - heading "Rs. 849" [level=2] [ref=f1e484]
            - paragraph [ref=f1e485]: Colour Blocked Shirt – Sky Blue
            - generic [ref=f1e486] [cursor=pointer]:
              - generic [ref=f1e487]: 
              - text: Add to cart
          - generic [ref=f1e488]:
            - heading "Rs. 849" [level=2] [ref=f1e489]
            - paragraph [ref=f1e490]: Colour Blocked Shirt – Sky Blue
            - generic [ref=f1e491] [cursor=pointer]:
              - generic [ref=f1e492]: 
              - text: Add to cart
        - list [ref=f1e494]:
          - listitem [ref=f1e495]:
            - link " View Product" [ref=f1e496] [cursor=pointer]:
              - /url: /product_details/24
              - generic [ref=f1e497]: 
              - text: View Product
      - generic [ref=f1e499]:
        - generic [ref=f1e500]:
          - generic [ref=f1e501]:
            - img "ecommerce website products" [ref=f1e502]
            - heading "Rs. 1299" [level=2] [ref=f1e503]
            - paragraph [ref=f1e504]: Pure Cotton V-Neck T-Shirt
            - generic [ref=f1e505] [cursor=pointer]:
              - generic [ref=f1e506]: 
              - text: Add to cart
          - generic [ref=f1e507]:
            - heading "Rs. 1299" [level=2] [ref=f1e508]
            - paragraph [ref=f1e509]: Pure Cotton V-Neck T-Shirt
            - generic [ref=f1e510] [cursor=pointer]:
              - generic [ref=f1e511]: 
              - text: Add to cart
        - list [ref=f1e513]:
          - listitem [ref=f1e514]:
            - link " View Product" [ref=f1e515] [cursor=pointer]:
              - /url: /product_details/28
              - generic [ref=f1e516]: 
              - text: View Product
      - generic [ref=f1e518]:
        - generic [ref=f1e519]:
          - generic [ref=f1e520]:
            - img "ecommerce website products" [ref=f1e521]
            - heading "Rs. 1000" [level=2] [ref=f1e522]
            - paragraph [ref=f1e523]: Green Side Placket Detail T-Shirt
            - generic [ref=f1e524] [cursor=pointer]:
              - generic [ref=f1e525]: 
              - text: Add to cart
          - generic [ref=f1e526]:
            - heading "Rs. 1000" [level=2] [ref=f1e527]
            - paragraph [ref=f1e528]: Green Side Placket Detail T-Shirt
            - generic [ref=f1e529] [cursor=pointer]:
              - generic [ref=f1e530]: 
              - text: Add to cart
        - list [ref=f1e532]:
          - listitem [ref=f1e533]:
            - link " View Product" [ref=f1e534] [cursor=pointer]:
              - /url: /product_details/29
              - generic [ref=f1e535]: 
              - text: View Product
      - generic [ref=f1e537]:
        - generic [ref=f1e538]:
          - generic [ref=f1e539]:
            - img "ecommerce website products" [ref=f1e540]
            - heading "Rs. 1500" [level=2] [ref=f1e541]
            - paragraph [ref=f1e542]: Premium Polo T-Shirts
            - generic [ref=f1e543] [cursor=pointer]:
              - generic [ref=f1e544]: 
              - text: Add to cart
          - generic [ref=f1e545]:
            - heading "Rs. 1500" [level=2] [ref=f1e546]
            - paragraph [ref=f1e547]: Premium Polo T-Shirts
            - generic [ref=f1e548] [cursor=pointer]:
              - generic [ref=f1e549]: 
              - text: Add to cart
        - list [ref=f1e551]:
          - listitem [ref=f1e552]:
            - link " View Product" [ref=f1e553] [cursor=pointer]:
              - /url: /product_details/30
              - generic [ref=f1e554]: 
              - text: View Product
      - generic [ref=f1e556]:
        - generic [ref=f1e557]:
          - generic [ref=f1e558]:
            - img "ecommerce website products" [ref=f1e559]
            - heading "Rs. 850" [level=2] [ref=f1e560]
            - paragraph [ref=f1e561]: Pure Cotton Neon Green Tshirt
            - generic [ref=f1e562] [cursor=pointer]:
              - generic [ref=f1e563]: 
              - text: Add to cart
          - generic [ref=f1e564]:
            - heading "Rs. 850" [level=2] [ref=f1e565]
            - paragraph [ref=f1e566]: Pure Cotton Neon Green Tshirt
            - generic [ref=f1e567] [cursor=pointer]:
              - generic [ref=f1e568]: 
              - text: Add to cart
        - list [ref=f1e570]:
          - listitem [ref=f1e571]:
            - link " View Product" [ref=f1e572] [cursor=pointer]:
              - /url: /product_details/31
              - generic [ref=f1e573]: 
              - text: View Product
      - generic [ref=f1e575]:
        - generic [ref=f1e576]:
          - generic [ref=f1e577]:
            - img "ecommerce website products"
            - heading "Rs. 799" [level=2] [ref=f1e578]
            - paragraph [ref=f1e579]: Soft Stretch Jeans
            - generic [ref=f1e580] [cursor=pointer]:
              - generic [ref=f1e581]: 
              - text: Add to cart
          - generic [ref=f1e582]:
            - heading "Rs. 799" [level=2] [ref=f1e583]
            - paragraph [ref=f1e584]: Soft Stretch Jeans
            - generic [ref=f1e585] [cursor=pointer]:
              - generic [ref=f1e586]: 
              - text: Add to cart
        - list [ref=f1e588]:
          - listitem [ref=f1e589]:
            - link " View Product" [ref=f1e590] [cursor=pointer]:
              - /url: /product_details/33
              - generic [ref=f1e591]: 
              - text: View Product
      - generic [ref=f1e593]:
        - generic [ref=f1e594]:
          - generic [ref=f1e595]:
            - img "ecommerce website products"
            - heading "Rs. 1200" [level=2] [ref=f1e596]
            - paragraph [ref=f1e597]: Regular Fit Straight Jeans
            - generic [ref=f1e598] [cursor=pointer]:
              - generic [ref=f1e599]: 
              - text: Add to cart
          - generic [ref=f1e600]:
            - heading "Rs. 1200" [level=2] [ref=f1e601]
            - paragraph [ref=f1e602]: Regular Fit Straight Jeans
            - generic [ref=f1e603] [cursor=pointer]:
              - generic [ref=f1e604]: 
              - text: Add to cart
        - list [ref=f1e606]:
          - listitem [ref=f1e607]:
            - link " View Product" [ref=f1e608] [cursor=pointer]:
              - /url: /product_details/35
              - generic [ref=f1e609]: 
              - text: View Product
      - generic [ref=f1e611]:
        - generic [ref=f1e612]:
          - generic [ref=f1e613]:
            - img "ecommerce website products"
            - heading "Rs. 1400" [level=2] [ref=f1e614]
            - paragraph [ref=f1e615]: Grunt Blue Slim Fit Jeans
            - generic [ref=f1e616] [cursor=pointer]:
              - generic [ref=f1e617]: 
              - text: Add to cart
          - generic [ref=f1e618]:
            - heading "Rs. 1400" [level=2] [ref=f1e619]
            - paragraph [ref=f1e620]: Grunt Blue Slim Fit Jeans
            - generic [ref=f1e621] [cursor=pointer]:
              - generic [ref=f1e622]: 
              - text: Add to cart
        - list [ref=f1e624]:
          - listitem [ref=f1e625]:
            - link " View Product" [ref=f1e626] [cursor=pointer]:
              - /url: /product_details/37
              - generic [ref=f1e627]: 
              - text: View Product
      - generic [ref=f1e629]:
        - generic [ref=f1e630]:
          - generic [ref=f1e631]:
            - img "ecommerce website products"
            - heading "Rs. 2300" [level=2] [ref=f1e632]
            - paragraph [ref=f1e633]: Rose Pink Embroidered Maxi Dress
            - generic [ref=f1e634] [cursor=pointer]:
              - generic [ref=f1e635]: 
              - text: Add to cart
          - generic [ref=f1e636]:
            - heading "Rs. 2300" [level=2] [ref=f1e637]
            - paragraph [ref=f1e638]: Rose Pink Embroidered Maxi Dress
            - generic [ref=f1e639] [cursor=pointer]:
              - generic [ref=f1e640]: 
              - text: Add to cart
        - list [ref=f1e642]:
          - listitem [ref=f1e643]:
            - link " View Product" [ref=f1e644] [cursor=pointer]:
              - /url: /product_details/38
              - generic [ref=f1e645]: 
              - text: View Product
      - generic [ref=f1e647]:
        - generic [ref=f1e648]:
          - generic [ref=f1e649]:
            - img "ecommerce website products"
            - heading "Rs. 3000" [level=2] [ref=f1e650]
            - paragraph [ref=f1e651]: Cotton Silk Hand Block Print Saree
            - generic [ref=f1e652] [cursor=pointer]:
              - generic [ref=f1e653]: 
              - text: Add to cart
          - generic [ref=f1e654]:
            - heading "Rs. 3000" [level=2] [ref=f1e655]
            - paragraph [ref=f1e656]: Cotton Silk Hand Block Print Saree
            - generic [ref=f1e657] [cursor=pointer]:
              - generic [ref=f1e658]: 
              - text: Add to cart
        - list [ref=f1e660]:
          - listitem [ref=f1e661]:
            - link " View Product" [ref=f1e662] [cursor=pointer]:
              - /url: /product_details/39
              - generic [ref=f1e663]: 
              - text: View Product
      - generic [ref=f1e665]:
        - generic [ref=f1e666]:
          - generic [ref=f1e667]:
            - img "ecommerce website products"
            - heading "Rs. 3500" [level=2] [ref=f1e668]
            - paragraph [ref=f1e669]: Rust Red Linen Saree
            - generic [ref=f1e670] [cursor=pointer]:
              - generic [ref=f1e671]: 
              - text: Add to cart
          - generic [ref=f1e672]:
            - heading "Rs. 3500" [level=2] [ref=f1e673]
            - paragraph [ref=f1e674]: Rust Red Linen Saree
            - generic [ref=f1e675] [cursor=pointer]:
              - generic [ref=f1e676]: 
              - text: Add to cart
        - list [ref=f1e678]:
          - listitem [ref=f1e679]:
            - link " View Product" [ref=f1e680] [cursor=pointer]:
              - /url: /product_details/40
              - generic [ref=f1e681]: 
              - text: View Product
      - generic [ref=f1e683]:
        - generic [ref=f1e684]:
          - generic [ref=f1e685]:
            - img "ecommerce website products"
            - heading "Rs. 5000" [level=2] [ref=f1e686]
            - paragraph [ref=f1e687]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=f1e688] [cursor=pointer]:
              - generic [ref=f1e689]: 
              - text: Add to cart
          - generic [ref=f1e690]:
            - heading "Rs. 5000" [level=2] [ref=f1e691]
            - paragraph [ref=f1e692]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=f1e693] [cursor=pointer]:
              - generic [ref=f1e694]: 
              - text: Add to cart
        - list [ref=f1e696]:
          - listitem [ref=f1e697]:
            - link " View Product" [ref=f1e698] [cursor=pointer]:
              - /url: /product_details/41
              - generic [ref=f1e699]: 
              - text: View Product
      - generic [ref=f1e701]:
        - generic [ref=f1e702]:
          - generic [ref=f1e703]:
            - img "ecommerce website products"
            - heading "Rs. 1400" [level=2] [ref=f1e704]
            - paragraph [ref=f1e705]: Lace Top For Women
            - generic [ref=f1e706] [cursor=pointer]:
              - generic [ref=f1e707]: 
              - text: Add to cart
          - generic [ref=f1e708]:
            - heading "Rs. 1400" [level=2] [ref=f1e709]
            - paragraph [ref=f1e710]: Lace Top For Women
            - generic [ref=f1e711] [cursor=pointer]:
              - generic [ref=f1e712]: 
              - text: Add to cart
        - list [ref=f1e714]:
          - listitem [ref=f1e715]:
            - link " View Product" [ref=f1e716] [cursor=pointer]:
              - /url: /product_details/42
              - generic [ref=f1e717]: 
              - text: View Product
      - generic [ref=f1e719]:
        - generic [ref=f1e720]:
          - generic [ref=f1e721]:
            - img "ecommerce website products"
            - heading "Rs. 1389" [level=2] [ref=f1e722]
            - paragraph [ref=f1e723]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=f1e724] [cursor=pointer]:
              - generic [ref=f1e725]: 
              - text: Add to cart
          - generic [ref=f1e726]:
            - heading "Rs. 1389" [level=2] [ref=f1e727]
            - paragraph [ref=f1e728]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=f1e729] [cursor=pointer]:
              - generic [ref=f1e730]: 
              - text: Add to cart
        - list [ref=f1e732]:
          - listitem [ref=f1e733]:
            - link " View Product" [ref=f1e734] [cursor=pointer]:
              - /url: /product_details/43
              - generic [ref=f1e735]: 
              - text: View Product
  - contentinfo [ref=f1e736]:
    - generic [ref=f1e741]:
      - heading "Subscription" [level=2] [ref=f1e742]
      - generic [ref=f1e743]:
        - textbox "Your email address" [ref=f1e744]
        - button "" [ref=f1e745] [cursor=pointer]
        - paragraph [ref=f1e747]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f1e751]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import type { Locator, Page } from '@playwright/test';
  2  | 
  3  | export class ProductPage {
  4  |   private readonly page: Page;
  5  |   private readonly searchInput: Locator;
  6  |   private readonly searchButton: Locator;
  7  |   private readonly productsHeading: Locator;
  8  |   private readonly searchedProductsHeading: Locator;
  9  |   private readonly productCards: Locator;
  10 |   private readonly cartModal: Locator;
  11 |   private readonly viewCartLink: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 |     this.page = page;
  15 |     this.searchInput = page.getByPlaceholder('Search Product');
  16 |     this.searchButton = page
  17 |       .getByRole('button')
  18 |       .filter({ has: page.locator('i.fa-search') });
  19 |     this.productsHeading = page.getByRole('heading', {
  20 |       name: 'All Products',
  21 |       exact: true,
  22 |     });
  23 |     this.searchedProductsHeading = page.getByRole('heading', {
  24 |       name: /^Searched Products$/i,
  25 |     });
  26 |     this.productCards = page.locator('.product-image-wrapper');
  27 |     this.cartModal = page.locator('#cartModal');
  28 |     this.viewCartLink = this.cartModal.getByRole('link', {
  29 |       name: 'View Cart',
  30 |       exact: true,
  31 |     });
  32 |   }
  33 | 
  34 |   async waitUntilVisible(): Promise<void> {
  35 |     await this.productsHeading.waitFor({ state: 'visible' });
  36 |   }
  37 | 
  38 |   async searchFor(term: string): Promise<void> {
  39 |     await this.searchInput.fill(term);
  40 |     await this.searchButton.click();
  41 |     await this.page.waitForURL(
  42 |       (url) => url.searchParams.get('search') === term,
  43 |       { waitUntil: 'domcontentloaded' },
  44 |     );
  45 |     await this.searchedProductsHeading.waitFor({ state: 'visible' });
  46 |   }
  47 | 
  48 |   get searchedHeading(): Locator {
  49 |     return this.searchedProductsHeading;
  50 |   }
  51 | 
  52 |   async getVisibleProductNames(): Promise<string[]> {
  53 |     return this.page
  54 |       .locator('.product-image-wrapper .productinfo p')
  55 |       .allTextContents();
  56 |   }
  57 | 
  58 |   private productCard(productName: string): Locator {
  59 |     return this.productCards.filter({
  60 |       has: this.page.getByText(productName, { exact: true }),
  61 |     });
  62 |   }
  63 | 
  64 |   async addToCart(productName: string): Promise<void> {
  65 |     const card = this.productCard(productName).first();
  66 |     await card.hover();
  67 |     await card.locator('.product-overlay a.add-to-cart').click();
> 68 |     await this.viewCartLink.waitFor({ state: 'visible' });
     |                             ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  69 |   }
  70 | 
  71 |   async openCartFromConfirmation(): Promise<void> {
  72 |     await this.viewCartLink.click();
  73 |   }
  74 | 
  75 |   async openProductDetails(productName: string): Promise<void> {
  76 |     const card = this.productCard(productName).first();
  77 |     await card
  78 |       .getByRole('link', { name: 'View Product', exact: true })
  79 |       .click();
  80 |   }
  81 | }
```