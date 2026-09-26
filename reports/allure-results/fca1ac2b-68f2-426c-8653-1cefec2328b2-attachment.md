# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\product-browsing.spec.ts >> Test Case 18: view products by category
- Location: tests\ui\product-browsing.spec.ts:6:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#accordian').locator('#Women') to be visible
    22 × locator resolved to hidden <div id="Women" class="panel-collapse collapse">…</div>

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
          - generic [ref=f1e107]:
            - heading "Rs. 500" [level=2] [ref=f1e108]
            - paragraph [ref=f1e109]: Blue Top
            - generic [ref=f1e110] [cursor=pointer]:
              - generic [ref=f1e111]: 
              - text: Add to cart
        - list [ref=f1e113]:
          - listitem [ref=f1e114]:
            - link " View Product" [ref=f1e115] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=f1e116]: 
              - text: View Product
      - generic [ref=f1e118]:
        - generic [ref=f1e119]:
          - generic [ref=f1e120]:
            - img "ecommerce website products" [ref=f1e121]
            - heading "Rs. 400" [level=2] [ref=f1e122]
            - paragraph [ref=f1e123]: Men Tshirt
            - generic [ref=f1e124] [cursor=pointer]:
              - generic [ref=f1e125]: 
              - text: Add to cart
          - generic [ref=f1e126]:
            - heading "Rs. 400" [level=2] [ref=f1e127]
            - paragraph [ref=f1e128]: Men Tshirt
            - generic [ref=f1e129] [cursor=pointer]:
              - generic [ref=f1e130]: 
              - text: Add to cart
        - list [ref=f1e132]:
          - listitem [ref=f1e133]:
            - link " View Product" [ref=f1e134] [cursor=pointer]:
              - /url: /product_details/2
              - generic [ref=f1e135]: 
              - text: View Product
      - generic [ref=f1e137]:
        - generic [ref=f1e138]:
          - generic [ref=f1e139]:
            - img "ecommerce website products" [ref=f1e140]
            - heading "Rs. 1000" [level=2] [ref=f1e141]
            - paragraph [ref=f1e142]: Sleeveless Dress
            - generic [ref=f1e143] [cursor=pointer]:
              - generic [ref=f1e144]: 
              - text: Add to cart
          - generic [ref=f1e145]:
            - heading "Rs. 1000" [level=2] [ref=f1e146]
            - paragraph [ref=f1e147]: Sleeveless Dress
            - generic [ref=f1e148] [cursor=pointer]:
              - generic [ref=f1e149]: 
              - text: Add to cart
        - list [ref=f1e151]:
          - listitem [ref=f1e152]:
            - link " View Product" [ref=f1e153] [cursor=pointer]:
              - /url: /product_details/3
              - generic [ref=f1e154]: 
              - text: View Product
      - generic [ref=f1e156]:
        - generic [ref=f1e157]:
          - generic [ref=f1e158]:
            - img "ecommerce website products" [ref=f1e159]
            - heading "Rs. 1500" [level=2] [ref=f1e160]
            - paragraph [ref=f1e161]: Stylish Dress
            - generic [ref=f1e162] [cursor=pointer]:
              - generic [ref=f1e163]: 
              - text: Add to cart
          - generic [ref=f1e164]:
            - heading "Rs. 1500" [level=2] [ref=f1e165]
            - paragraph [ref=f1e166]: Stylish Dress
            - generic [ref=f1e167] [cursor=pointer]:
              - generic [ref=f1e168]: 
              - text: Add to cart
        - list [ref=f1e170]:
          - listitem [ref=f1e171]:
            - link " View Product" [ref=f1e172] [cursor=pointer]:
              - /url: /product_details/4
              - generic [ref=f1e173]: 
              - text: View Product
      - generic [ref=f1e175]:
        - generic [ref=f1e176]:
          - generic [ref=f1e177]:
            - img "ecommerce website products" [ref=f1e178]
            - heading "Rs. 600" [level=2] [ref=f1e179]
            - paragraph [ref=f1e180]: Winter Top
            - generic [ref=f1e181] [cursor=pointer]:
              - generic [ref=f1e182]: 
              - text: Add to cart
          - generic [ref=f1e183]:
            - heading "Rs. 600" [level=2] [ref=f1e184]
            - paragraph [ref=f1e185]: Winter Top
            - generic [ref=f1e186] [cursor=pointer]:
              - generic [ref=f1e187]: 
              - text: Add to cart
        - list [ref=f1e189]:
          - listitem [ref=f1e190]:
            - link " View Product" [ref=f1e191] [cursor=pointer]:
              - /url: /product_details/5
              - generic [ref=f1e192]: 
              - text: View Product
      - generic [ref=f1e194]:
        - generic [ref=f1e195]:
          - generic [ref=f1e196]:
            - img "ecommerce website products" [ref=f1e197]
            - heading "Rs. 400" [level=2] [ref=f1e198]
            - paragraph [ref=f1e199]: Summer White Top
            - generic [ref=f1e200] [cursor=pointer]:
              - generic [ref=f1e201]: 
              - text: Add to cart
          - generic [ref=f1e202]:
            - heading "Rs. 400" [level=2] [ref=f1e203]
            - paragraph [ref=f1e204]: Summer White Top
            - generic [ref=f1e205] [cursor=pointer]:
              - generic [ref=f1e206]: 
              - text: Add to cart
        - list [ref=f1e208]:
          - listitem [ref=f1e209]:
            - link " View Product" [ref=f1e210] [cursor=pointer]:
              - /url: /product_details/6
              - generic [ref=f1e211]: 
              - text: View Product
      - generic [ref=f1e213]:
        - generic [ref=f1e214]:
          - generic [ref=f1e215]:
            - img "ecommerce website products" [ref=f1e216]
            - heading "Rs. 1000" [level=2] [ref=f1e217]
            - paragraph [ref=f1e218]: Madame Top For Women
            - generic [ref=f1e219] [cursor=pointer]:
              - generic [ref=f1e220]: 
              - text: Add to cart
          - generic [ref=f1e221]:
            - heading "Rs. 1000" [level=2] [ref=f1e222]
            - paragraph [ref=f1e223]: Madame Top For Women
            - generic [ref=f1e224] [cursor=pointer]:
              - generic [ref=f1e225]: 
              - text: Add to cart
        - list [ref=f1e227]:
          - listitem [ref=f1e228]:
            - link " View Product" [ref=f1e229] [cursor=pointer]:
              - /url: /product_details/7
              - generic [ref=f1e230]: 
              - text: View Product
      - generic [ref=f1e232]:
        - generic [ref=f1e233]:
          - generic [ref=f1e234]:
            - img "ecommerce website products" [ref=f1e235]
            - heading "Rs. 700" [level=2] [ref=f1e236]
            - paragraph [ref=f1e237]: Fancy Green Top
            - generic [ref=f1e238] [cursor=pointer]:
              - generic [ref=f1e239]: 
              - text: Add to cart
          - generic [ref=f1e240]:
            - heading "Rs. 700" [level=2] [ref=f1e241]
            - paragraph [ref=f1e242]: Fancy Green Top
            - generic [ref=f1e243] [cursor=pointer]:
              - generic [ref=f1e244]: 
              - text: Add to cart
        - list [ref=f1e246]:
          - listitem [ref=f1e247]:
            - link " View Product" [ref=f1e248] [cursor=pointer]:
              - /url: /product_details/8
              - generic [ref=f1e249]: 
              - text: View Product
      - generic [ref=f1e251]:
        - generic [ref=f1e252]:
          - generic [ref=f1e253]:
            - img "ecommerce website products" [ref=f1e254]
            - heading "Rs. 499" [level=2] [ref=f1e255]
            - paragraph [ref=f1e256]: Sleeves Printed Top - White
            - generic [ref=f1e257] [cursor=pointer]:
              - generic [ref=f1e258]: 
              - text: Add to cart
          - generic [ref=f1e259]:
            - heading "Rs. 499" [level=2] [ref=f1e260]
            - paragraph [ref=f1e261]: Sleeves Printed Top - White
            - generic [ref=f1e262] [cursor=pointer]:
              - generic [ref=f1e263]: 
              - text: Add to cart
        - list [ref=f1e265]:
          - listitem [ref=f1e266]:
            - link " View Product" [ref=f1e267] [cursor=pointer]:
              - /url: /product_details/11
              - generic [ref=f1e268]: 
              - text: View Product
      - generic [ref=f1e270]:
        - generic [ref=f1e271]:
          - generic [ref=f1e272]:
            - img "ecommerce website products" [ref=f1e273]
            - heading "Rs. 359" [level=2] [ref=f1e274]
            - paragraph [ref=f1e275]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=f1e276] [cursor=pointer]:
              - generic [ref=f1e277]: 
              - text: Add to cart
          - generic [ref=f1e278]:
            - heading "Rs. 359" [level=2] [ref=f1e279]
            - paragraph [ref=f1e280]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=f1e281] [cursor=pointer]:
              - generic [ref=f1e282]: 
              - text: Add to cart
        - list [ref=f1e284]:
          - listitem [ref=f1e285]:
            - link " View Product" [ref=f1e286] [cursor=pointer]:
              - /url: /product_details/12
              - generic [ref=f1e287]: 
              - text: View Product
      - generic [ref=f1e289]:
        - generic [ref=f1e290]:
          - generic [ref=f1e291]:
            - img "ecommerce website products" [ref=f1e292]
            - heading "Rs. 278" [level=2] [ref=f1e293]
            - paragraph [ref=f1e294]: Frozen Tops For Kids
            - generic [ref=f1e295] [cursor=pointer]:
              - generic [ref=f1e296]: 
              - text: Add to cart
          - generic [ref=f1e297]:
            - heading "Rs. 278" [level=2] [ref=f1e298]
            - paragraph [ref=f1e299]: Frozen Tops For Kids
            - generic [ref=f1e300] [cursor=pointer]:
              - generic [ref=f1e301]: 
              - text: Add to cart
        - list [ref=f1e303]:
          - listitem [ref=f1e304]:
            - link " View Product" [ref=f1e305] [cursor=pointer]:
              - /url: /product_details/13
              - generic [ref=f1e306]: 
              - text: View Product
      - generic [ref=f1e308]:
        - generic [ref=f1e309]:
          - generic [ref=f1e310]:
            - img "ecommerce website products" [ref=f1e311]
            - heading "Rs. 679" [level=2] [ref=f1e312]
            - paragraph [ref=f1e313]: Full Sleeves Top Cherry - Pink
            - generic [ref=f1e314] [cursor=pointer]:
              - generic [ref=f1e315]: 
              - text: Add to cart
          - generic [ref=f1e316]:
            - heading "Rs. 679" [level=2] [ref=f1e317]
            - paragraph [ref=f1e318]: Full Sleeves Top Cherry - Pink
            - generic [ref=f1e319] [cursor=pointer]:
              - generic [ref=f1e320]: 
              - text: Add to cart
        - list [ref=f1e322]:
          - listitem [ref=f1e323]:
            - link " View Product" [ref=f1e324] [cursor=pointer]:
              - /url: /product_details/14
              - generic [ref=f1e325]: 
              - text: View Product
      - generic [ref=f1e327]:
        - generic [ref=f1e328]:
          - generic [ref=f1e329]:
            - img "ecommerce website products" [ref=f1e330]
            - heading "Rs. 315" [level=2] [ref=f1e331]
            - paragraph [ref=f1e332]: Printed Off Shoulder Top - White
            - generic [ref=f1e333] [cursor=pointer]:
              - generic [ref=f1e334]: 
              - text: Add to cart
          - generic [ref=f1e335]:
            - heading "Rs. 315" [level=2] [ref=f1e336]
            - paragraph [ref=f1e337]: Printed Off Shoulder Top - White
            - generic [ref=f1e338] [cursor=pointer]:
              - generic [ref=f1e339]: 
              - text: Add to cart
        - list [ref=f1e341]:
          - listitem [ref=f1e342]:
            - link " View Product" [ref=f1e343] [cursor=pointer]:
              - /url: /product_details/15
              - generic [ref=f1e344]: 
              - text: View Product
      - generic [ref=f1e346]:
        - generic [ref=f1e347]:
          - generic [ref=f1e348]:
            - img "ecommerce website products" [ref=f1e349]
            - heading "Rs. 478" [level=2] [ref=f1e350]
            - paragraph [ref=f1e351]: Sleeves Top and Short - Blue & Pink
            - generic [ref=f1e352] [cursor=pointer]:
              - generic [ref=f1e353]: 
              - text: Add to cart
          - generic [ref=f1e354]:
            - heading "Rs. 478" [level=2] [ref=f1e355]
            - paragraph [ref=f1e356]: Sleeves Top and Short - Blue & Pink
            - generic [ref=f1e357] [cursor=pointer]:
              - generic [ref=f1e358]: 
              - text: Add to cart
        - list [ref=f1e360]:
          - listitem [ref=f1e361]:
            - link " View Product" [ref=f1e362] [cursor=pointer]:
              - /url: /product_details/16
              - generic [ref=f1e363]: 
              - text: View Product
      - generic [ref=f1e365]:
        - generic [ref=f1e366]:
          - generic [ref=f1e367]:
            - img "ecommerce website products" [ref=f1e368]
            - heading "Rs. 1200" [level=2] [ref=f1e369]
            - paragraph [ref=f1e370]: Little Girls Mr. Panda Shirt
            - generic [ref=f1e371] [cursor=pointer]:
              - generic [ref=f1e372]: 
              - text: Add to cart
          - generic [ref=f1e373]:
            - heading "Rs. 1200" [level=2] [ref=f1e374]
            - paragraph [ref=f1e375]: Little Girls Mr. Panda Shirt
            - generic [ref=f1e376] [cursor=pointer]:
              - generic [ref=f1e377]: 
              - text: Add to cart
        - list [ref=f1e379]:
          - listitem [ref=f1e380]:
            - link " View Product" [ref=f1e381] [cursor=pointer]:
              - /url: /product_details/18
              - generic [ref=f1e382]: 
              - text: View Product
      - generic [ref=f1e384]:
        - generic [ref=f1e385]:
          - generic [ref=f1e386]:
            - img "ecommerce website products" [ref=f1e387]
            - heading "Rs. 1050" [level=2] [ref=f1e388]
            - paragraph [ref=f1e389]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=f1e390] [cursor=pointer]:
              - generic [ref=f1e391]: 
              - text: Add to cart
          - generic [ref=f1e392]:
            - heading "Rs. 1050" [level=2] [ref=f1e393]
            - paragraph [ref=f1e394]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=f1e395] [cursor=pointer]:
              - generic [ref=f1e396]: 
              - text: Add to cart
        - list [ref=f1e398]:
          - listitem [ref=f1e399]:
            - link " View Product" [ref=f1e400] [cursor=pointer]:
              - /url: /product_details/19
              - generic [ref=f1e401]: 
              - text: View Product
      - generic [ref=f1e403]:
        - generic [ref=f1e404]:
          - generic [ref=f1e405]:
            - img "ecommerce website products" [ref=f1e406]
            - heading "Rs. 1190" [level=2] [ref=f1e407]
            - paragraph [ref=f1e408]: Cotton Mull Embroidered Dress
            - generic [ref=f1e409] [cursor=pointer]:
              - generic [ref=f1e410]: 
              - text: Add to cart
          - generic [ref=f1e411]:
            - heading "Rs. 1190" [level=2] [ref=f1e412]
            - paragraph [ref=f1e413]: Cotton Mull Embroidered Dress
            - generic [ref=f1e414] [cursor=pointer]:
              - generic [ref=f1e415]: 
              - text: Add to cart
        - list [ref=f1e417]:
          - listitem [ref=f1e418]:
            - link " View Product" [ref=f1e419] [cursor=pointer]:
              - /url: /product_details/20
              - generic [ref=f1e420]: 
              - text: View Product
      - generic [ref=f1e422]:
        - generic [ref=f1e423]:
          - generic [ref=f1e424]:
            - img "ecommerce website products" [ref=f1e425]
            - heading "Rs. 1530" [level=2] [ref=f1e426]
            - paragraph [ref=f1e427]: Blue Cotton Indie Mickey Dress
            - generic [ref=f1e428] [cursor=pointer]:
              - generic [ref=f1e429]: 
              - text: Add to cart
          - generic [ref=f1e430]:
            - heading "Rs. 1530" [level=2] [ref=f1e431]
            - paragraph [ref=f1e432]: Blue Cotton Indie Mickey Dress
            - generic [ref=f1e433] [cursor=pointer]:
              - generic [ref=f1e434]: 
              - text: Add to cart
        - list [ref=f1e436]:
          - listitem [ref=f1e437]:
            - link " View Product" [ref=f1e438] [cursor=pointer]:
              - /url: /product_details/21
              - generic [ref=f1e439]: 
              - text: View Product
      - generic [ref=f1e441]:
        - generic [ref=f1e442]:
          - generic [ref=f1e443]:
            - img "ecommerce website products" [ref=f1e444]
            - heading "Rs. 1600" [level=2] [ref=f1e445]
            - paragraph [ref=f1e446]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=f1e447] [cursor=pointer]:
              - generic [ref=f1e448]: 
              - text: Add to cart
          - generic [ref=f1e449]:
            - heading "Rs. 1600" [level=2] [ref=f1e450]
            - paragraph [ref=f1e451]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=f1e452] [cursor=pointer]:
              - generic [ref=f1e453]: 
              - text: Add to cart
        - list [ref=f1e455]:
          - listitem [ref=f1e456]:
            - link " View Product" [ref=f1e457] [cursor=pointer]:
              - /url: /product_details/22
              - generic [ref=f1e458]: 
              - text: View Product
      - generic [ref=f1e460]:
        - generic [ref=f1e461]:
          - generic [ref=f1e462]:
            - img "ecommerce website products" [ref=f1e463]
            - heading "Rs. 1100" [level=2] [ref=f1e464]
            - paragraph [ref=f1e465]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=f1e466] [cursor=pointer]:
              - generic [ref=f1e467]: 
              - text: Add to cart
          - generic [ref=f1e468]:
            - heading "Rs. 1100" [level=2] [ref=f1e469]
            - paragraph [ref=f1e470]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=f1e471] [cursor=pointer]:
              - generic [ref=f1e472]: 
              - text: Add to cart
        - list [ref=f1e474]:
          - listitem [ref=f1e475]:
            - link " View Product" [ref=f1e476] [cursor=pointer]:
              - /url: /product_details/23
              - generic [ref=f1e477]: 
              - text: View Product
      - generic [ref=f1e479]:
        - generic [ref=f1e480]:
          - generic [ref=f1e481]:
            - img "ecommerce website products" [ref=f1e482]
            - heading "Rs. 849" [level=2] [ref=f1e483]
            - paragraph [ref=f1e484]: Colour Blocked Shirt – Sky Blue
            - generic [ref=f1e485] [cursor=pointer]:
              - generic [ref=f1e486]: 
              - text: Add to cart
          - generic [ref=f1e487]:
            - heading "Rs. 849" [level=2] [ref=f1e488]
            - paragraph [ref=f1e489]: Colour Blocked Shirt – Sky Blue
            - generic [ref=f1e490] [cursor=pointer]:
              - generic [ref=f1e491]: 
              - text: Add to cart
        - list [ref=f1e493]:
          - listitem [ref=f1e494]:
            - link " View Product" [ref=f1e495] [cursor=pointer]:
              - /url: /product_details/24
              - generic [ref=f1e496]: 
              - text: View Product
      - generic [ref=f1e498]:
        - generic [ref=f1e499]:
          - generic [ref=f1e500]:
            - img "ecommerce website products" [ref=f1e501]
            - heading "Rs. 1299" [level=2] [ref=f1e502]
            - paragraph [ref=f1e503]: Pure Cotton V-Neck T-Shirt
            - generic [ref=f1e504] [cursor=pointer]:
              - generic [ref=f1e505]: 
              - text: Add to cart
          - generic [ref=f1e506]:
            - heading "Rs. 1299" [level=2] [ref=f1e507]
            - paragraph [ref=f1e508]: Pure Cotton V-Neck T-Shirt
            - generic [ref=f1e509] [cursor=pointer]:
              - generic [ref=f1e510]: 
              - text: Add to cart
        - list [ref=f1e512]:
          - listitem [ref=f1e513]:
            - link " View Product" [ref=f1e514] [cursor=pointer]:
              - /url: /product_details/28
              - generic [ref=f1e515]: 
              - text: View Product
      - generic [ref=f1e517]:
        - generic [ref=f1e518]:
          - generic [ref=f1e519]:
            - img "ecommerce website products" [ref=f1e520]
            - heading "Rs. 1000" [level=2] [ref=f1e521]
            - paragraph [ref=f1e522]: Green Side Placket Detail T-Shirt
            - generic [ref=f1e523] [cursor=pointer]:
              - generic [ref=f1e524]: 
              - text: Add to cart
          - generic [ref=f1e525]:
            - heading "Rs. 1000" [level=2] [ref=f1e526]
            - paragraph [ref=f1e527]: Green Side Placket Detail T-Shirt
            - generic [ref=f1e528] [cursor=pointer]:
              - generic [ref=f1e529]: 
              - text: Add to cart
        - list [ref=f1e531]:
          - listitem [ref=f1e532]:
            - link " View Product" [ref=f1e533] [cursor=pointer]:
              - /url: /product_details/29
              - generic [ref=f1e534]: 
              - text: View Product
      - generic [ref=f1e536]:
        - generic [ref=f1e537]:
          - generic [ref=f1e538]:
            - img "ecommerce website products" [ref=f1e539]
            - heading "Rs. 1500" [level=2] [ref=f1e540]
            - paragraph [ref=f1e541]: Premium Polo T-Shirts
            - generic [ref=f1e542] [cursor=pointer]:
              - generic [ref=f1e543]: 
              - text: Add to cart
          - generic [ref=f1e544]:
            - heading "Rs. 1500" [level=2] [ref=f1e545]
            - paragraph [ref=f1e546]: Premium Polo T-Shirts
            - generic [ref=f1e547] [cursor=pointer]:
              - generic [ref=f1e548]: 
              - text: Add to cart
        - list [ref=f1e550]:
          - listitem [ref=f1e551]:
            - link " View Product" [ref=f1e552] [cursor=pointer]:
              - /url: /product_details/30
              - generic [ref=f1e553]: 
              - text: View Product
      - generic [ref=f1e555]:
        - generic [ref=f1e556]:
          - generic [ref=f1e557]:
            - img "ecommerce website products" [ref=f1e558]
            - heading "Rs. 850" [level=2] [ref=f1e559]
            - paragraph [ref=f1e560]: Pure Cotton Neon Green Tshirt
            - generic [ref=f1e561] [cursor=pointer]:
              - generic [ref=f1e562]: 
              - text: Add to cart
          - generic [ref=f1e563]:
            - heading "Rs. 850" [level=2] [ref=f1e564]
            - paragraph [ref=f1e565]: Pure Cotton Neon Green Tshirt
            - generic [ref=f1e566] [cursor=pointer]:
              - generic [ref=f1e567]: 
              - text: Add to cart
        - list [ref=f1e569]:
          - listitem [ref=f1e570]:
            - link " View Product" [ref=f1e571] [cursor=pointer]:
              - /url: /product_details/31
              - generic [ref=f1e572]: 
              - text: View Product
      - generic [ref=f1e574]:
        - generic [ref=f1e575]:
          - generic [ref=f1e576]:
            - img "ecommerce website products" [ref=f1e577]
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
            - img "ecommerce website products" [ref=f1e596]
            - heading "Rs. 1200" [level=2] [ref=f1e597]
            - paragraph [ref=f1e598]: Regular Fit Straight Jeans
            - generic [ref=f1e599] [cursor=pointer]:
              - generic [ref=f1e600]: 
              - text: Add to cart
          - generic [ref=f1e601]:
            - heading "Rs. 1200" [level=2] [ref=f1e602]
            - paragraph [ref=f1e603]: Regular Fit Straight Jeans
            - generic [ref=f1e604] [cursor=pointer]:
              - generic [ref=f1e605]: 
              - text: Add to cart
        - list [ref=f1e607]:
          - listitem [ref=f1e608]:
            - link " View Product" [ref=f1e609] [cursor=pointer]:
              - /url: /product_details/35
              - generic [ref=f1e610]: 
              - text: View Product
      - generic [ref=f1e612]:
        - generic [ref=f1e613]:
          - generic [ref=f1e614]:
            - img "ecommerce website products" [ref=f1e615]
            - heading "Rs. 1400" [level=2] [ref=f1e616]
            - paragraph [ref=f1e617]: Grunt Blue Slim Fit Jeans
            - generic [ref=f1e618] [cursor=pointer]:
              - generic [ref=f1e619]: 
              - text: Add to cart
          - generic [ref=f1e620]:
            - heading "Rs. 1400" [level=2] [ref=f1e621]
            - paragraph [ref=f1e622]: Grunt Blue Slim Fit Jeans
            - generic [ref=f1e623] [cursor=pointer]:
              - generic [ref=f1e624]: 
              - text: Add to cart
        - list [ref=f1e626]:
          - listitem [ref=f1e627]:
            - link " View Product" [ref=f1e628] [cursor=pointer]:
              - /url: /product_details/37
              - generic [ref=f1e629]: 
              - text: View Product
      - generic [ref=f1e631]:
        - generic [ref=f1e632]:
          - generic [ref=f1e633]:
            - img "ecommerce website products" [ref=f1e634]
            - heading "Rs. 2300" [level=2] [ref=f1e635]
            - paragraph [ref=f1e636]: Rose Pink Embroidered Maxi Dress
            - generic [ref=f1e637] [cursor=pointer]:
              - generic [ref=f1e638]: 
              - text: Add to cart
          - generic [ref=f1e639]:
            - heading "Rs. 2300" [level=2] [ref=f1e640]
            - paragraph [ref=f1e641]: Rose Pink Embroidered Maxi Dress
            - generic [ref=f1e642] [cursor=pointer]:
              - generic [ref=f1e643]: 
              - text: Add to cart
        - list [ref=f1e645]:
          - listitem [ref=f1e646]:
            - link " View Product" [ref=f1e647] [cursor=pointer]:
              - /url: /product_details/38
              - generic [ref=f1e648]: 
              - text: View Product
      - generic [ref=f1e650]:
        - generic [ref=f1e651]:
          - generic [ref=f1e652]:
            - img "ecommerce website products" [ref=f1e653]
            - heading "Rs. 3000" [level=2] [ref=f1e654]
            - paragraph [ref=f1e655]: Cotton Silk Hand Block Print Saree
            - generic [ref=f1e656] [cursor=pointer]:
              - generic [ref=f1e657]: 
              - text: Add to cart
          - generic [ref=f1e658]:
            - heading "Rs. 3000" [level=2] [ref=f1e659]
            - paragraph [ref=f1e660]: Cotton Silk Hand Block Print Saree
            - generic [ref=f1e661] [cursor=pointer]:
              - generic [ref=f1e662]: 
              - text: Add to cart
        - list [ref=f1e664]:
          - listitem [ref=f1e665]:
            - link " View Product" [ref=f1e666] [cursor=pointer]:
              - /url: /product_details/39
              - generic [ref=f1e667]: 
              - text: View Product
      - generic [ref=f1e669]:
        - generic [ref=f1e670]:
          - generic [ref=f1e671]:
            - img "ecommerce website products" [ref=f1e672]
            - heading "Rs. 3500" [level=2] [ref=f1e673]
            - paragraph [ref=f1e674]: Rust Red Linen Saree
            - generic [ref=f1e675] [cursor=pointer]:
              - generic [ref=f1e676]: 
              - text: Add to cart
          - generic [ref=f1e677]:
            - heading "Rs. 3500" [level=2] [ref=f1e678]
            - paragraph [ref=f1e679]: Rust Red Linen Saree
            - generic [ref=f1e680] [cursor=pointer]:
              - generic [ref=f1e681]: 
              - text: Add to cart
        - list [ref=f1e683]:
          - listitem [ref=f1e684]:
            - link " View Product" [ref=f1e685] [cursor=pointer]:
              - /url: /product_details/40
              - generic [ref=f1e686]: 
              - text: View Product
      - generic [ref=f1e688]:
        - generic [ref=f1e689]:
          - generic [ref=f1e690]:
            - img "ecommerce website products" [ref=f1e691]
            - heading "Rs. 5000" [level=2] [ref=f1e692]
            - paragraph [ref=f1e693]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=f1e694] [cursor=pointer]:
              - generic [ref=f1e695]: 
              - text: Add to cart
          - generic [ref=f1e696]:
            - heading "Rs. 5000" [level=2] [ref=f1e697]
            - paragraph [ref=f1e698]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=f1e699] [cursor=pointer]:
              - generic [ref=f1e700]: 
              - text: Add to cart
        - list [ref=f1e702]:
          - listitem [ref=f1e703]:
            - link " View Product" [ref=f1e704] [cursor=pointer]:
              - /url: /product_details/41
              - generic [ref=f1e705]: 
              - text: View Product
      - generic [ref=f1e707]:
        - generic [ref=f1e708]:
          - generic [ref=f1e709]:
            - img "ecommerce website products" [ref=f1e710]
            - heading "Rs. 1400" [level=2] [ref=f1e711]
            - paragraph [ref=f1e712]: Lace Top For Women
            - generic [ref=f1e713] [cursor=pointer]:
              - generic [ref=f1e714]: 
              - text: Add to cart
          - generic [ref=f1e715]:
            - heading "Rs. 1400" [level=2] [ref=f1e716]
            - paragraph [ref=f1e717]: Lace Top For Women
            - generic [ref=f1e718] [cursor=pointer]:
              - generic [ref=f1e719]: 
              - text: Add to cart
        - list [ref=f1e721]:
          - listitem [ref=f1e722]:
            - link " View Product" [ref=f1e723] [cursor=pointer]:
              - /url: /product_details/42
              - generic [ref=f1e724]: 
              - text: View Product
      - generic [ref=f1e726]:
        - generic [ref=f1e727]:
          - generic [ref=f1e728]:
            - img "ecommerce website products" [ref=f1e729]
            - heading "Rs. 1389" [level=2] [ref=f1e730]
            - paragraph [ref=f1e731]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=f1e732] [cursor=pointer]:
              - generic [ref=f1e733]: 
              - text: Add to cart
          - generic [ref=f1e734]:
            - heading "Rs. 1389" [level=2] [ref=f1e735]
            - paragraph [ref=f1e736]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=f1e737] [cursor=pointer]:
              - generic [ref=f1e738]: 
              - text: Add to cart
        - list [ref=f1e740]:
          - listitem [ref=f1e741]:
            - link " View Product" [ref=f1e742] [cursor=pointer]:
              - /url: /product_details/43
              - generic [ref=f1e743]: 
              - text: View Product
  - contentinfo [ref=f1e744]:
    - generic [ref=f1e749]:
      - heading "Subscription" [level=2] [ref=f1e750]
      - generic [ref=f1e751]:
        - textbox "Your email address" [ref=f1e752]
        - button "" [ref=f1e753] [cursor=pointer]
        - paragraph [ref=f1e755]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f1e759]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1   | import type { Locator, Page } from '@playwright/test';
  2   | 
  3   | export class ProductPage {
  4   |   private readonly page: Page;
  5   |   private readonly searchInput: Locator;
  6   |   private readonly searchButton: Locator;
  7   |   private readonly productsHeading: Locator;
  8   |   private readonly searchedProductsHeading: Locator;
  9   |   private readonly productCards: Locator;
  10  |   private readonly categoryAccordion: Locator;
  11  |   private readonly brandsSection: Locator;
  12  | 
  13  |   constructor(page: Page) {
  14  |     this.page = page;
  15  |     this.searchInput = page.getByPlaceholder('Search Product');
  16  |     this.searchButton = page
  17  |       .getByRole('button')
  18  |       .filter({ has: page.locator('i.fa-search') });
  19  |     this.productsHeading = page.getByRole('heading', {
  20  |       name: 'All Products',
  21  |       exact: true,
  22  |     });
  23  |     this.searchedProductsHeading = page.getByRole('heading', {
  24  |       name: /^Searched Products$/i,
  25  |     });
  26  |     this.productCards = page.locator('.product-image-wrapper');
  27  |     this.categoryAccordion = page.locator('#accordian');
  28  |     this.brandsSection = page.locator('.brands_products');
  29  |   }
  30  | 
  31  |   async waitUntilVisible(): Promise<void> {
  32  |     await this.productsHeading.waitFor({ state: 'visible' });
  33  |   }
  34  | 
  35  |   async searchFor(term: string): Promise<void> {
  36  |     await this.searchInput.fill(term);
  37  |     await this.searchButton.click();
  38  |     await this.page.waitForURL(
  39  |       (url) => url.searchParams.get('search') === term,
  40  |       { waitUntil: 'domcontentloaded' },
  41  |     );
  42  |     await this.searchedProductsHeading.waitFor({ state: 'visible' });
  43  |   }
  44  | 
  45  |   get searchedHeading(): Locator {
  46  |     return this.searchedProductsHeading;
  47  |   }
  48  | 
  49  |   async getVisibleProductNames(): Promise<string[]> {
  50  |     return this.page
  51  |       .locator('.product-image-wrapper .productinfo p')
  52  |       .allTextContents();
  53  |   }
  54  | 
  55  |   private productCard(productName: string): Locator {
  56  |     return this.productCards.filter({
  57  |       has: this.page.getByText(productName, { exact: true }),
  58  |     });
  59  |   }
  60  | 
  61  |   async addToCart(productName: string): Promise<void> {
  62  |     const card = this.productCard(productName).first();
  63  |     await card.hover();
  64  |     await card.locator('.product-overlay a.add-to-cart').click();
  65  |   }
  66  | 
  67  |   async openProductDetails(productName: string): Promise<void> {
  68  |     const card = this.productCard(productName).first();
  69  |     await card.getByRole('link', { name: /View Product$/ }).click();
  70  |   }
  71  | 
  72  |   async openCategory(category: string, subcategory: string): Promise<void> {
  73  |     await this.categoryAccordion
  74  |       .getByRole('link', { name: new RegExp(`${category}$`) })
  75  |       .click();
  76  |     const categoryPanel = this.categoryAccordion.locator(`#${category}`);
> 77  |     await categoryPanel.waitFor({ state: 'visible' });
      |                         ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  78  |     await categoryPanel
  79  |       .getByRole('link', { name: subcategory, exact: true })
  80  |       .click();
  81  |   }
  82  | 
  83  |   async openBrand(brand: string): Promise<void> {
  84  |     await this.brandsSection
  85  |       .getByRole('link', { name: new RegExp(`${brand}$`) })
  86  |       .click();
  87  |   }
  88  | 
  89  |   getCategoryHeading(category: string, subcategory: string): Locator {
  90  |     return this.page.getByRole('heading', {
  91  |       name: `${category} - ${subcategory} Products`,
  92  |       exact: true,
  93  |     });
  94  |   }
  95  | 
  96  |   getBrandHeading(brand: string): Locator {
  97  |     return this.page.getByRole('heading', {
  98  |       name: `Brand - ${brand} Products`,
  99  |       exact: true,
  100 |     });
  101 |   }
  102 | }
```