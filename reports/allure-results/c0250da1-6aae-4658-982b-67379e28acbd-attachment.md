# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\shopping-cart.spec.ts >> Test Cases 12 and 17: add and remove a product from the cart
- Location: tests\ui\shopping-cart.spec.ts:7:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
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
            - generic [ref=f1e18]: 
            - text: Products
        - listitem [ref=f1e19]:
          - link " Cart" [ref=f1e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f1e21]: 
            - text: Cart
        - listitem [ref=f1e22]:
          - link " Signup / Login" [ref=f1e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f1e24]: 
            - text: Signup / Login
        - listitem [ref=f1e25]:
          - link " Test Cases" [ref=f1e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f1e27]: 
            - text: Test Cases
        - listitem [ref=f1e28]:
          - link " API Testing" [ref=f1e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f1e30]: 
            - text: API Testing
        - listitem [ref=f1e31]:
          - link " Video Tutorials" [ref=f1e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f1e33]: 
            - text: Video Tutorials
        - listitem [ref=f1e34]:
          - link " Contact us" [ref=f1e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f1e36]: 
            - text: Contact us
  - generic [ref=f1e38]:
    - img "Website for practice" [ref=f1e39]
    - textbox "Search Product" [ref=f1e40]
    - button "" [ref=f1e41] [cursor=pointer]
  - generic [ref=f1e45]:
    - generic [ref=f1e47]:
      - heading "Category" [level=2] [ref=f1e48]
      - generic [ref=f1e49]:
        - heading [level=4] [ref=f1e52]:
          - link " Women" [ref=f1e53] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=f1e54]: 
            - text: Women
        - heading [level=4] [ref=f1e58]:
          - link " Men" [ref=f1e59] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=f1e60]: 
            - text: Men
        - heading [level=4] [ref=f1e64]:
          - link " Kids" [ref=f1e65] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=f1e66]: 
            - text: Kids
      - generic [ref=f1e68]:
        - heading "Brands" [level=2] [ref=f1e69]
        - list [ref=f1e71]:
          - listitem [ref=f1e72]:
            - link "(6) Polo" [ref=f1e73] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=f1e74]: (6)
              - text: Polo
          - listitem [ref=f1e75]:
            - link "(5) H&M" [ref=f1e76] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=f1e77]: (5)
              - text: H&M
          - listitem [ref=f1e78]:
            - link "(5) Madame" [ref=f1e79] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=f1e80]: (5)
              - text: Madame
          - listitem [ref=f1e81]:
            - link "(3) Mast & Harbour" [ref=f1e82] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=f1e83]: (3)
              - text: Mast & Harbour
          - listitem [ref=f1e84]:
            - link "(4) Babyhug" [ref=f1e85] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=f1e86]: (4)
              - text: Babyhug
          - listitem [ref=f1e87]:
            - link "(3) Allen Solly Junior" [ref=f1e88] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=f1e89]: (3)
              - text: Allen Solly Junior
          - listitem [ref=f1e90]:
            - link "(3) Kookie Kids" [ref=f1e91] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=f1e92]: (3)
              - text: Kookie Kids
          - listitem [ref=f1e93]:
            - link "(5) Biba" [ref=f1e94] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=f1e95]: (5)
              - text: Biba
    - generic [ref=f1e97]:
      - heading "All Products" [level=2] [ref=f1e98]
      - generic [ref=f1e100]:
        - generic [ref=f1e101]:
          - generic [ref=f1e102]:
            - img "ecommerce website products" [ref=f1e103]
            - heading "Rs. 500" [level=2] [ref=f1e104]
            - paragraph [ref=f1e105]: Blue Top
            - generic [ref=f1e106] [cursor=pointer]:
              - generic [ref=f1e107]: 
              - text: Add to cart
          - generic [ref=f1e109]:
            - heading "Rs. 500" [level=2] [ref=f1e110]
            - paragraph [ref=f1e111]: Blue Top
            - generic [ref=f1e112] [cursor=pointer]:
              - generic [ref=f1e113]: 
              - text: Add to cart
        - list [ref=f1e115]:
          - listitem [ref=f1e116]:
            - link " View Product" [ref=f1e117] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=f1e118]: 
              - text: View Product
      - generic [ref=f1e120]:
        - generic [ref=f1e121]:
          - generic [ref=f1e122]:
            - img "ecommerce website products" [ref=f1e123]
            - heading "Rs. 400" [level=2] [ref=f1e124]
            - paragraph [ref=f1e125]: Men Tshirt
            - generic [ref=f1e126] [cursor=pointer]:
              - generic [ref=f1e127]: 
              - text: Add to cart
          - generic [ref=f1e128]:
            - heading "Rs. 400" [level=2] [ref=f1e129]
            - paragraph [ref=f1e130]: Men Tshirt
            - generic [ref=f1e131] [cursor=pointer]:
              - generic [ref=f1e132]: 
              - text: Add to cart
        - list [ref=f1e134]:
          - listitem [ref=f1e135]:
            - link " View Product" [ref=f1e136] [cursor=pointer]:
              - /url: /product_details/2
              - generic [ref=f1e137]: 
              - text: View Product
      - generic [ref=f1e139]:
        - generic [ref=f1e140]:
          - generic [ref=f1e141]:
            - img "ecommerce website products" [ref=f1e142]
            - heading "Rs. 1000" [level=2] [ref=f1e143]
            - paragraph [ref=f1e144]: Sleeveless Dress
            - generic [ref=f1e145] [cursor=pointer]:
              - generic [ref=f1e146]: 
              - text: Add to cart
          - generic [ref=f1e147]:
            - heading "Rs. 1000" [level=2] [ref=f1e148]
            - paragraph [ref=f1e149]: Sleeveless Dress
            - generic [ref=f1e150] [cursor=pointer]:
              - generic [ref=f1e151]: 
              - text: Add to cart
        - list [ref=f1e153]:
          - listitem [ref=f1e154]:
            - link " View Product" [ref=f1e155] [cursor=pointer]:
              - /url: /product_details/3
              - generic [ref=f1e156]: 
              - text: View Product
      - generic [ref=f1e158]:
        - generic [ref=f1e159]:
          - generic [ref=f1e160]:
            - img "ecommerce website products" [ref=f1e161]
            - heading "Rs. 1500" [level=2] [ref=f1e162]
            - paragraph [ref=f1e163]: Stylish Dress
            - generic [ref=f1e164] [cursor=pointer]:
              - generic [ref=f1e165]: 
              - text: Add to cart
          - generic [ref=f1e166]:
            - heading "Rs. 1500" [level=2] [ref=f1e167]
            - paragraph [ref=f1e168]: Stylish Dress
            - generic [ref=f1e169] [cursor=pointer]:
              - generic [ref=f1e170]: 
              - text: Add to cart
        - list [ref=f1e172]:
          - listitem [ref=f1e173]:
            - link " View Product" [ref=f1e174] [cursor=pointer]:
              - /url: /product_details/4
              - generic [ref=f1e175]: 
              - text: View Product
      - generic [ref=f1e177]:
        - generic [ref=f1e178]:
          - generic [ref=f1e179]:
            - img "ecommerce website products" [ref=f1e180]
            - heading "Rs. 600" [level=2] [ref=f1e181]
            - paragraph [ref=f1e182]: Winter Top
            - generic [ref=f1e183] [cursor=pointer]:
              - generic [ref=f1e184]: 
              - text: Add to cart
          - generic [ref=f1e185]:
            - heading "Rs. 600" [level=2] [ref=f1e186]
            - paragraph [ref=f1e187]: Winter Top
            - generic [ref=f1e188] [cursor=pointer]:
              - generic [ref=f1e189]: 
              - text: Add to cart
        - list [ref=f1e191]:
          - listitem [ref=f1e192]:
            - link " View Product" [ref=f1e193] [cursor=pointer]:
              - /url: /product_details/5
              - generic [ref=f1e194]: 
              - text: View Product
      - generic [ref=f1e196]:
        - generic [ref=f1e197]:
          - generic [ref=f1e198]:
            - img "ecommerce website products" [ref=f1e199]
            - heading "Rs. 400" [level=2] [ref=f1e200]
            - paragraph [ref=f1e201]: Summer White Top
            - generic [ref=f1e202] [cursor=pointer]:
              - generic [ref=f1e203]: 
              - text: Add to cart
          - generic [ref=f1e204]:
            - heading "Rs. 400" [level=2] [ref=f1e205]
            - paragraph [ref=f1e206]: Summer White Top
            - generic [ref=f1e207] [cursor=pointer]:
              - generic [ref=f1e208]: 
              - text: Add to cart
        - list [ref=f1e210]:
          - listitem [ref=f1e211]:
            - link " View Product" [ref=f1e212] [cursor=pointer]:
              - /url: /product_details/6
              - generic [ref=f1e213]: 
              - text: View Product
      - generic [ref=f1e215]:
        - generic [ref=f1e216]:
          - generic [ref=f1e217]:
            - img "ecommerce website products" [ref=f1e218]
            - heading "Rs. 1000" [level=2] [ref=f1e219]
            - paragraph [ref=f1e220]: Madame Top For Women
            - generic [ref=f1e221] [cursor=pointer]:
              - generic [ref=f1e222]: 
              - text: Add to cart
          - generic [ref=f1e223]:
            - heading "Rs. 1000" [level=2] [ref=f1e224]
            - paragraph [ref=f1e225]: Madame Top For Women
            - generic [ref=f1e226] [cursor=pointer]:
              - generic [ref=f1e227]: 
              - text: Add to cart
        - list [ref=f1e229]:
          - listitem [ref=f1e230]:
            - link " View Product" [ref=f1e231] [cursor=pointer]:
              - /url: /product_details/7
              - generic [ref=f1e232]: 
              - text: View Product
      - generic [ref=f1e234]:
        - generic [ref=f1e235]:
          - generic [ref=f1e236]:
            - img "ecommerce website products" [ref=f1e237]
            - heading "Rs. 700" [level=2] [ref=f1e238]
            - paragraph [ref=f1e239]: Fancy Green Top
            - generic [ref=f1e240] [cursor=pointer]:
              - generic [ref=f1e241]: 
              - text: Add to cart
          - generic [ref=f1e242]:
            - heading "Rs. 700" [level=2] [ref=f1e243]
            - paragraph [ref=f1e244]: Fancy Green Top
            - generic [ref=f1e245] [cursor=pointer]:
              - generic [ref=f1e246]: 
              - text: Add to cart
        - list [ref=f1e248]:
          - listitem [ref=f1e249]:
            - link " View Product" [ref=f1e250] [cursor=pointer]:
              - /url: /product_details/8
              - generic [ref=f1e251]: 
              - text: View Product
      - generic [ref=f1e253]:
        - generic [ref=f1e254]:
          - generic [ref=f1e255]:
            - img "ecommerce website products" [ref=f1e256]
            - heading "Rs. 499" [level=2] [ref=f1e257]
            - paragraph [ref=f1e258]: Sleeves Printed Top - White
            - generic [ref=f1e259] [cursor=pointer]:
              - generic [ref=f1e260]: 
              - text: Add to cart
          - generic [ref=f1e261]:
            - heading "Rs. 499" [level=2] [ref=f1e262]
            - paragraph [ref=f1e263]: Sleeves Printed Top - White
            - generic [ref=f1e264] [cursor=pointer]:
              - generic [ref=f1e265]: 
              - text: Add to cart
        - list [ref=f1e267]:
          - listitem [ref=f1e268]:
            - link " View Product" [ref=f1e269] [cursor=pointer]:
              - /url: /product_details/11
              - generic [ref=f1e270]: 
              - text: View Product
      - generic [ref=f1e272]:
        - generic [ref=f1e273]:
          - generic [ref=f1e274]:
            - img "ecommerce website products" [ref=f1e275]
            - heading "Rs. 359" [level=2] [ref=f1e276]
            - paragraph [ref=f1e277]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=f1e278] [cursor=pointer]:
              - generic [ref=f1e279]: 
              - text: Add to cart
          - generic [ref=f1e280]:
            - heading "Rs. 359" [level=2] [ref=f1e281]
            - paragraph [ref=f1e282]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=f1e283] [cursor=pointer]:
              - generic [ref=f1e284]: 
              - text: Add to cart
        - list [ref=f1e286]:
          - listitem [ref=f1e287]:
            - link " View Product" [ref=f1e288] [cursor=pointer]:
              - /url: /product_details/12
              - generic [ref=f1e289]: 
              - text: View Product
      - generic [ref=f1e291]:
        - generic [ref=f1e292]:
          - generic [ref=f1e293]:
            - img "ecommerce website products" [ref=f1e294]
            - heading "Rs. 278" [level=2] [ref=f1e295]
            - paragraph [ref=f1e296]: Frozen Tops For Kids
            - generic [ref=f1e297] [cursor=pointer]:
              - generic [ref=f1e298]: 
              - text: Add to cart
          - generic [ref=f1e299]:
            - heading "Rs. 278" [level=2] [ref=f1e300]
            - paragraph [ref=f1e301]: Frozen Tops For Kids
            - generic [ref=f1e302] [cursor=pointer]:
              - generic [ref=f1e303]: 
              - text: Add to cart
        - list [ref=f1e305]:
          - listitem [ref=f1e306]:
            - link " View Product" [ref=f1e307] [cursor=pointer]:
              - /url: /product_details/13
              - generic [ref=f1e308]: 
              - text: View Product
      - generic [ref=f1e310]:
        - generic [ref=f1e311]:
          - generic [ref=f1e312]:
            - img "ecommerce website products" [ref=f1e313]
            - heading "Rs. 679" [level=2] [ref=f1e314]
            - paragraph [ref=f1e315]: Full Sleeves Top Cherry - Pink
            - generic [ref=f1e316] [cursor=pointer]:
              - generic [ref=f1e317]: 
              - text: Add to cart
          - generic [ref=f1e318]:
            - heading "Rs. 679" [level=2] [ref=f1e319]
            - paragraph [ref=f1e320]: Full Sleeves Top Cherry - Pink
            - generic [ref=f1e321] [cursor=pointer]:
              - generic [ref=f1e322]: 
              - text: Add to cart
        - list [ref=f1e324]:
          - listitem [ref=f1e325]:
            - link " View Product" [ref=f1e326] [cursor=pointer]:
              - /url: /product_details/14
              - generic [ref=f1e327]: 
              - text: View Product
      - generic [ref=f1e329]:
        - generic [ref=f1e330]:
          - generic [ref=f1e331]:
            - img "ecommerce website products" [ref=f1e332]
            - heading "Rs. 315" [level=2] [ref=f1e333]
            - paragraph [ref=f1e334]: Printed Off Shoulder Top - White
            - generic [ref=f1e335] [cursor=pointer]:
              - generic [ref=f1e336]: 
              - text: Add to cart
          - generic [ref=f1e337]:
            - heading "Rs. 315" [level=2] [ref=f1e338]
            - paragraph [ref=f1e339]: Printed Off Shoulder Top - White
            - generic [ref=f1e340] [cursor=pointer]:
              - generic [ref=f1e341]: 
              - text: Add to cart
        - list [ref=f1e343]:
          - listitem [ref=f1e344]:
            - link " View Product" [ref=f1e345] [cursor=pointer]:
              - /url: /product_details/15
              - generic [ref=f1e346]: 
              - text: View Product
      - generic [ref=f1e348]:
        - generic [ref=f1e349]:
          - generic [ref=f1e350]:
            - img "ecommerce website products" [ref=f1e351]
            - heading "Rs. 478" [level=2] [ref=f1e352]
            - paragraph [ref=f1e353]: Sleeves Top and Short - Blue & Pink
            - generic [ref=f1e354] [cursor=pointer]:
              - generic [ref=f1e355]: 
              - text: Add to cart
          - generic [ref=f1e356]:
            - heading "Rs. 478" [level=2] [ref=f1e357]
            - paragraph [ref=f1e358]: Sleeves Top and Short - Blue & Pink
            - generic [ref=f1e359] [cursor=pointer]:
              - generic [ref=f1e360]: 
              - text: Add to cart
        - list [ref=f1e362]:
          - listitem [ref=f1e363]:
            - link " View Product" [ref=f1e364] [cursor=pointer]:
              - /url: /product_details/16
              - generic [ref=f1e365]: 
              - text: View Product
      - generic [ref=f1e367]:
        - generic [ref=f1e368]:
          - generic [ref=f1e369]:
            - img "ecommerce website products" [ref=f1e370]
            - heading "Rs. 1200" [level=2] [ref=f1e371]
            - paragraph [ref=f1e372]: Little Girls Mr. Panda Shirt
            - generic [ref=f1e373] [cursor=pointer]:
              - generic [ref=f1e374]: 
              - text: Add to cart
          - generic [ref=f1e375]:
            - heading "Rs. 1200" [level=2] [ref=f1e376]
            - paragraph [ref=f1e377]: Little Girls Mr. Panda Shirt
            - generic [ref=f1e378] [cursor=pointer]:
              - generic [ref=f1e379]: 
              - text: Add to cart
        - list [ref=f1e381]:
          - listitem [ref=f1e382]:
            - link " View Product" [ref=f1e383] [cursor=pointer]:
              - /url: /product_details/18
              - generic [ref=f1e384]: 
              - text: View Product
      - generic [ref=f1e386]:
        - generic [ref=f1e387]:
          - generic [ref=f1e388]:
            - img "ecommerce website products" [ref=f1e389]
            - heading "Rs. 1050" [level=2] [ref=f1e390]
            - paragraph [ref=f1e391]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=f1e392] [cursor=pointer]:
              - generic [ref=f1e393]: 
              - text: Add to cart
          - generic [ref=f1e394]:
            - heading "Rs. 1050" [level=2] [ref=f1e395]
            - paragraph [ref=f1e396]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=f1e397] [cursor=pointer]:
              - generic [ref=f1e398]: 
              - text: Add to cart
        - list [ref=f1e400]:
          - listitem [ref=f1e401]:
            - link " View Product" [ref=f1e402] [cursor=pointer]:
              - /url: /product_details/19
              - generic [ref=f1e403]: 
              - text: View Product
      - generic [ref=f1e405]:
        - generic [ref=f1e406]:
          - generic [ref=f1e407]:
            - img "ecommerce website products" [ref=f1e408]
            - heading "Rs. 1190" [level=2] [ref=f1e409]
            - paragraph [ref=f1e410]: Cotton Mull Embroidered Dress
            - generic [ref=f1e411] [cursor=pointer]:
              - generic [ref=f1e412]: 
              - text: Add to cart
          - generic [ref=f1e413]:
            - heading "Rs. 1190" [level=2] [ref=f1e414]
            - paragraph [ref=f1e415]: Cotton Mull Embroidered Dress
            - generic [ref=f1e416] [cursor=pointer]:
              - generic [ref=f1e417]: 
              - text: Add to cart
        - list [ref=f1e419]:
          - listitem [ref=f1e420]:
            - link " View Product" [ref=f1e421] [cursor=pointer]:
              - /url: /product_details/20
              - generic [ref=f1e422]: 
              - text: View Product
      - generic [ref=f1e424]:
        - generic [ref=f1e425]:
          - generic [ref=f1e426]:
            - img "ecommerce website products" [ref=f1e427]
            - heading "Rs. 1530" [level=2] [ref=f1e428]
            - paragraph [ref=f1e429]: Blue Cotton Indie Mickey Dress
            - generic [ref=f1e430] [cursor=pointer]:
              - generic [ref=f1e431]: 
              - text: Add to cart
          - generic [ref=f1e432]:
            - heading "Rs. 1530" [level=2] [ref=f1e433]
            - paragraph [ref=f1e434]: Blue Cotton Indie Mickey Dress
            - generic [ref=f1e435] [cursor=pointer]:
              - generic [ref=f1e436]: 
              - text: Add to cart
        - list [ref=f1e438]:
          - listitem [ref=f1e439]:
            - link " View Product" [ref=f1e440] [cursor=pointer]:
              - /url: /product_details/21
              - generic [ref=f1e441]: 
              - text: View Product
      - generic [ref=f1e443]:
        - generic [ref=f1e444]:
          - generic [ref=f1e445]:
            - img "ecommerce website products" [ref=f1e446]
            - heading "Rs. 1600" [level=2] [ref=f1e447]
            - paragraph [ref=f1e448]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=f1e449] [cursor=pointer]:
              - generic [ref=f1e450]: 
              - text: Add to cart
          - generic [ref=f1e451]:
            - heading "Rs. 1600" [level=2] [ref=f1e452]
            - paragraph [ref=f1e453]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=f1e454] [cursor=pointer]:
              - generic [ref=f1e455]: 
              - text: Add to cart
        - list [ref=f1e457]:
          - listitem [ref=f1e458]:
            - link " View Product" [ref=f1e459] [cursor=pointer]:
              - /url: /product_details/22
              - generic [ref=f1e460]: 
              - text: View Product
      - generic [ref=f1e462]:
        - generic [ref=f1e463]:
          - generic [ref=f1e464]:
            - img "ecommerce website products" [ref=f1e465]
            - heading "Rs. 1100" [level=2] [ref=f1e466]
            - paragraph [ref=f1e467]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=f1e468] [cursor=pointer]:
              - generic [ref=f1e469]: 
              - text: Add to cart
          - generic [ref=f1e470]:
            - heading "Rs. 1100" [level=2] [ref=f1e471]
            - paragraph [ref=f1e472]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=f1e473] [cursor=pointer]:
              - generic [ref=f1e474]: 
              - text: Add to cart
        - list [ref=f1e476]:
          - listitem [ref=f1e477]:
            - link " View Product" [ref=f1e478] [cursor=pointer]:
              - /url: /product_details/23
              - generic [ref=f1e479]: 
              - text: View Product
      - generic [ref=f1e481]:
        - generic [ref=f1e482]:
          - generic [ref=f1e483]:
            - img "ecommerce website products" [ref=f1e484]
            - heading "Rs. 849" [level=2] [ref=f1e485]
            - paragraph [ref=f1e486]: Colour Blocked Shirt – Sky Blue
            - generic [ref=f1e487] [cursor=pointer]:
              - generic [ref=f1e488]: 
              - text: Add to cart
          - generic [ref=f1e489]:
            - heading "Rs. 849" [level=2] [ref=f1e490]
            - paragraph [ref=f1e491]: Colour Blocked Shirt – Sky Blue
            - generic [ref=f1e492] [cursor=pointer]:
              - generic [ref=f1e493]: 
              - text: Add to cart
        - list [ref=f1e495]:
          - listitem [ref=f1e496]:
            - link " View Product" [ref=f1e497] [cursor=pointer]:
              - /url: /product_details/24
              - generic [ref=f1e498]: 
              - text: View Product
      - generic [ref=f1e500]:
        - generic [ref=f1e501]:
          - generic [ref=f1e502]:
            - img "ecommerce website products" [ref=f1e503]
            - heading "Rs. 1299" [level=2] [ref=f1e504]
            - paragraph [ref=f1e505]: Pure Cotton V-Neck T-Shirt
            - generic [ref=f1e506] [cursor=pointer]:
              - generic [ref=f1e507]: 
              - text: Add to cart
          - generic [ref=f1e508]:
            - heading "Rs. 1299" [level=2] [ref=f1e509]
            - paragraph [ref=f1e510]: Pure Cotton V-Neck T-Shirt
            - generic [ref=f1e511] [cursor=pointer]:
              - generic [ref=f1e512]: 
              - text: Add to cart
        - list [ref=f1e514]:
          - listitem [ref=f1e515]:
            - link " View Product" [ref=f1e516] [cursor=pointer]:
              - /url: /product_details/28
              - generic [ref=f1e517]: 
              - text: View Product
      - generic [ref=f1e519]:
        - generic [ref=f1e520]:
          - generic [ref=f1e521]:
            - img "ecommerce website products" [ref=f1e522]
            - heading "Rs. 1000" [level=2] [ref=f1e523]
            - paragraph [ref=f1e524]: Green Side Placket Detail T-Shirt
            - generic [ref=f1e525] [cursor=pointer]:
              - generic [ref=f1e526]: 
              - text: Add to cart
          - generic [ref=f1e527]:
            - heading "Rs. 1000" [level=2] [ref=f1e528]
            - paragraph [ref=f1e529]: Green Side Placket Detail T-Shirt
            - generic [ref=f1e530] [cursor=pointer]:
              - generic [ref=f1e531]: 
              - text: Add to cart
        - list [ref=f1e533]:
          - listitem [ref=f1e534]:
            - link " View Product" [ref=f1e535] [cursor=pointer]:
              - /url: /product_details/29
              - generic [ref=f1e536]: 
              - text: View Product
      - generic [ref=f1e538]:
        - generic [ref=f1e539]:
          - generic [ref=f1e540]:
            - img "ecommerce website products" [ref=f1e541]
            - heading "Rs. 1500" [level=2] [ref=f1e542]
            - paragraph [ref=f1e543]: Premium Polo T-Shirts
            - generic [ref=f1e544] [cursor=pointer]:
              - generic [ref=f1e545]: 
              - text: Add to cart
          - generic [ref=f1e546]:
            - heading "Rs. 1500" [level=2] [ref=f1e547]
            - paragraph [ref=f1e548]: Premium Polo T-Shirts
            - generic [ref=f1e549] [cursor=pointer]:
              - generic [ref=f1e550]: 
              - text: Add to cart
        - list [ref=f1e552]:
          - listitem [ref=f1e553]:
            - link " View Product" [ref=f1e554] [cursor=pointer]:
              - /url: /product_details/30
              - generic [ref=f1e555]: 
              - text: View Product
      - generic [ref=f1e557]:
        - generic [ref=f1e558]:
          - generic [ref=f1e559]:
            - img "ecommerce website products" [ref=f1e560]
            - heading "Rs. 850" [level=2] [ref=f1e561]
            - paragraph [ref=f1e562]: Pure Cotton Neon Green Tshirt
            - generic [ref=f1e563] [cursor=pointer]:
              - generic [ref=f1e564]: 
              - text: Add to cart
          - generic [ref=f1e565]:
            - heading "Rs. 850" [level=2] [ref=f1e566]
            - paragraph [ref=f1e567]: Pure Cotton Neon Green Tshirt
            - generic [ref=f1e568] [cursor=pointer]:
              - generic [ref=f1e569]: 
              - text: Add to cart
        - list [ref=f1e571]:
          - listitem [ref=f1e572]:
            - link " View Product" [ref=f1e573] [cursor=pointer]:
              - /url: /product_details/31
              - generic [ref=f1e574]: 
              - text: View Product
      - generic [ref=f1e576]:
        - generic [ref=f1e577]:
          - generic [ref=f1e578]:
            - img "ecommerce website products" [ref=f1e579]
            - heading "Rs. 799" [level=2] [ref=f1e580]
            - paragraph [ref=f1e581]: Soft Stretch Jeans
            - generic [ref=f1e582] [cursor=pointer]:
              - generic [ref=f1e583]: 
              - text: Add to cart
          - generic [ref=f1e584]:
            - heading "Rs. 799" [level=2] [ref=f1e585]
            - paragraph [ref=f1e586]: Soft Stretch Jeans
            - generic [ref=f1e587] [cursor=pointer]:
              - generic [ref=f1e588]: 
              - text: Add to cart
        - list [ref=f1e590]:
          - listitem [ref=f1e591]:
            - link " View Product" [ref=f1e592] [cursor=pointer]:
              - /url: /product_details/33
              - generic [ref=f1e593]: 
              - text: View Product
      - generic [ref=f1e595]:
        - generic [ref=f1e596]:
          - generic [ref=f1e597]:
            - img "ecommerce website products" [ref=f1e598]
            - heading "Rs. 1200" [level=2] [ref=f1e599]
            - paragraph [ref=f1e600]: Regular Fit Straight Jeans
            - generic [ref=f1e601] [cursor=pointer]:
              - generic [ref=f1e602]: 
              - text: Add to cart
          - generic [ref=f1e603]:
            - heading "Rs. 1200" [level=2] [ref=f1e604]
            - paragraph [ref=f1e605]: Regular Fit Straight Jeans
            - generic [ref=f1e606] [cursor=pointer]:
              - generic [ref=f1e607]: 
              - text: Add to cart
        - list [ref=f1e609]:
          - listitem [ref=f1e610]:
            - link " View Product" [ref=f1e611] [cursor=pointer]:
              - /url: /product_details/35
              - generic [ref=f1e612]: 
              - text: View Product
      - generic [ref=f1e614]:
        - generic [ref=f1e615]:
          - generic [ref=f1e616]:
            - img "ecommerce website products" [ref=f1e617]
            - heading "Rs. 1400" [level=2] [ref=f1e618]
            - paragraph [ref=f1e619]: Grunt Blue Slim Fit Jeans
            - generic [ref=f1e620] [cursor=pointer]:
              - generic [ref=f1e621]: 
              - text: Add to cart
          - generic [ref=f1e622]:
            - heading "Rs. 1400" [level=2] [ref=f1e623]
            - paragraph [ref=f1e624]: Grunt Blue Slim Fit Jeans
            - generic [ref=f1e625] [cursor=pointer]:
              - generic [ref=f1e626]: 
              - text: Add to cart
        - list [ref=f1e628]:
          - listitem [ref=f1e629]:
            - link " View Product" [ref=f1e630] [cursor=pointer]:
              - /url: /product_details/37
              - generic [ref=f1e631]: 
              - text: View Product
      - generic [ref=f1e633]:
        - generic [ref=f1e634]:
          - generic [ref=f1e635]:
            - img "ecommerce website products" [ref=f1e636]
            - heading "Rs. 2300" [level=2] [ref=f1e637]
            - paragraph [ref=f1e638]: Rose Pink Embroidered Maxi Dress
            - generic [ref=f1e639] [cursor=pointer]:
              - generic [ref=f1e640]: 
              - text: Add to cart
          - generic [ref=f1e641]:
            - heading "Rs. 2300" [level=2] [ref=f1e642]
            - paragraph [ref=f1e643]: Rose Pink Embroidered Maxi Dress
            - generic [ref=f1e644] [cursor=pointer]:
              - generic [ref=f1e645]: 
              - text: Add to cart
        - list [ref=f1e647]:
          - listitem [ref=f1e648]:
            - link " View Product" [ref=f1e649] [cursor=pointer]:
              - /url: /product_details/38
              - generic [ref=f1e650]: 
              - text: View Product
      - generic [ref=f1e652]:
        - generic [ref=f1e653]:
          - generic [ref=f1e654]:
            - img "ecommerce website products" [ref=f1e655]
            - heading "Rs. 3000" [level=2] [ref=f1e656]
            - paragraph [ref=f1e657]: Cotton Silk Hand Block Print Saree
            - generic [ref=f1e658] [cursor=pointer]:
              - generic [ref=f1e659]: 
              - text: Add to cart
          - generic [ref=f1e660]:
            - heading "Rs. 3000" [level=2] [ref=f1e661]
            - paragraph [ref=f1e662]: Cotton Silk Hand Block Print Saree
            - generic [ref=f1e663] [cursor=pointer]:
              - generic [ref=f1e664]: 
              - text: Add to cart
        - list [ref=f1e666]:
          - listitem [ref=f1e667]:
            - link " View Product" [ref=f1e668] [cursor=pointer]:
              - /url: /product_details/39
              - generic [ref=f1e669]: 
              - text: View Product
      - generic [ref=f1e671]:
        - generic [ref=f1e672]:
          - generic [ref=f1e673]:
            - img "ecommerce website products" [ref=f1e674]
            - heading "Rs. 3500" [level=2] [ref=f1e675]
            - paragraph [ref=f1e676]: Rust Red Linen Saree
            - generic [ref=f1e677] [cursor=pointer]:
              - generic [ref=f1e678]: 
              - text: Add to cart
          - generic [ref=f1e679]:
            - heading "Rs. 3500" [level=2] [ref=f1e680]
            - paragraph [ref=f1e681]: Rust Red Linen Saree
            - generic [ref=f1e682] [cursor=pointer]:
              - generic [ref=f1e683]: 
              - text: Add to cart
        - list [ref=f1e685]:
          - listitem [ref=f1e686]:
            - link " View Product" [ref=f1e687] [cursor=pointer]:
              - /url: /product_details/40
              - generic [ref=f1e688]: 
              - text: View Product
      - generic [ref=f1e690]:
        - generic [ref=f1e691]:
          - generic [ref=f1e692]:
            - img "ecommerce website products" [ref=f1e693]
            - heading "Rs. 5000" [level=2] [ref=f1e694]
            - paragraph [ref=f1e695]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=f1e696] [cursor=pointer]:
              - generic [ref=f1e697]: 
              - text: Add to cart
          - generic [ref=f1e698]:
            - heading "Rs. 5000" [level=2] [ref=f1e699]
            - paragraph [ref=f1e700]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=f1e701] [cursor=pointer]:
              - generic [ref=f1e702]: 
              - text: Add to cart
        - list [ref=f1e704]:
          - listitem [ref=f1e705]:
            - link " View Product" [ref=f1e706] [cursor=pointer]:
              - /url: /product_details/41
              - generic [ref=f1e707]: 
              - text: View Product
      - generic [ref=f1e709]:
        - generic [ref=f1e710]:
          - generic [ref=f1e711]:
            - img "ecommerce website products" [ref=f1e712]
            - heading "Rs. 1400" [level=2] [ref=f1e713]
            - paragraph [ref=f1e714]: Lace Top For Women
            - generic [ref=f1e715] [cursor=pointer]:
              - generic [ref=f1e716]: 
              - text: Add to cart
          - generic [ref=f1e717]:
            - heading "Rs. 1400" [level=2] [ref=f1e718]
            - paragraph [ref=f1e719]: Lace Top For Women
            - generic [ref=f1e720] [cursor=pointer]:
              - generic [ref=f1e721]: 
              - text: Add to cart
        - list [ref=f1e723]:
          - listitem [ref=f1e724]:
            - link " View Product" [ref=f1e725] [cursor=pointer]:
              - /url: /product_details/42
              - generic [ref=f1e726]: 
              - text: View Product
      - generic [ref=f1e728]:
        - generic [ref=f1e729]:
          - generic [ref=f1e730]:
            - img "ecommerce website products" [ref=f1e731]
            - heading "Rs. 1389" [level=2] [ref=f1e732]
            - paragraph [ref=f1e733]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=f1e734] [cursor=pointer]:
              - generic [ref=f1e735]: 
              - text: Add to cart
          - generic [ref=f1e736]:
            - heading "Rs. 1389" [level=2] [ref=f1e737]
            - paragraph [ref=f1e738]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=f1e739] [cursor=pointer]:
              - generic [ref=f1e740]: 
              - text: Add to cart
        - list [ref=f1e742]:
          - listitem [ref=f1e743]:
            - link " View Product" [ref=f1e744] [cursor=pointer]:
              - /url: /product_details/43
              - generic [ref=f1e745]: 
              - text: View Product
  - contentinfo [ref=f1e746]:
    - generic [ref=f1e751]:
      - heading "Subscription" [level=2] [ref=f1e752]
      - generic [ref=f1e753]:
        - textbox "Your email address" [ref=f1e754]
        - button "" [ref=f1e755] [cursor=pointer]
        - paragraph [ref=f1e757]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f1e761]: Copyright © 2021 All rights reserved
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
  16 |     this.searchButton = page.locator('#submit_search');
  17 |     this.productsHeading = page.getByRole('heading', {
  18 |       name: 'All Products',
  19 |       exact: true,
  20 |     });
  21 |     this.searchedProductsHeading = page.getByRole('heading', {
  22 |       name: 'Searched Products',
  23 |       exact: true,
  24 |     });
  25 |     this.productCards = page.locator('.product-image-wrapper');
  26 |     this.cartModal = page.locator('#cartModal');
  27 |     this.viewCartLink = this.cartModal.getByRole('link', {
  28 |       name: 'View Cart',
  29 |       exact: true,
  30 |     });
  31 |   }
  32 | 
  33 |   async waitUntilVisible(): Promise<void> {
  34 |     await this.productsHeading.waitFor({ state: 'visible' });
  35 |   }
  36 | 
  37 |   async searchFor(term: string): Promise<void> {
  38 |     await this.searchInput.fill(term);
  39 |     await this.searchButton.click();
  40 |     await this.searchedProductsHeading.waitFor({ state: 'visible' });
  41 |   }
  42 | 
  43 |   get searchedHeading(): Locator {
  44 |     return this.searchedProductsHeading;
  45 |   }
  46 | 
  47 |   async getVisibleProductNames(): Promise<string[]> {
  48 |     return this.page
  49 |       .locator('.product-image-wrapper .productinfo p')
  50 |       .allTextContents();
  51 |   }
  52 | 
  53 |   private productCard(productName: string): Locator {
  54 |     return this.productCards.filter({
  55 |       has: this.page.getByText(productName, { exact: true }),
  56 |     });
  57 |   }
  58 | 
  59 |   async addToCart(productName: string): Promise<void> {
  60 |     const card = this.productCard(productName).first();
  61 |     await card.locator('.productinfo a.add-to-cart').click();
> 62 |     await this.viewCartLink.waitFor({ state: 'visible' });
     |                             ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  63 |   }
  64 | 
  65 |   async openCartFromConfirmation(): Promise<void> {
  66 |     await this.viewCartLink.click();
  67 |   }
  68 | 
  69 |   async openProductDetails(productName: string): Promise<void> {
  70 |     const card = this.productCard(productName).first();
  71 |     await card
  72 |       .getByRole('link', { name: 'View Product', exact: true })
  73 |       .click();
  74 |   }
  75 | }
```