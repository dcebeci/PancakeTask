# PancakeTask
## Proje Kriterleri
- Aşağıda URL si verilen API den alacağınız products datasını bir tabloda göstermelisiniz.
  - API URL : https://dummyjson.com/products
- API den alacaginiz datanın tamamı tabloda doğru formatta görümeli (Örnek: logo alani resim olarak gorunmeli)
  - Dönen response'ta birden fazla imageUrl olduğu için ilk resmi tabloda göstermeniz yeterli olacaktır.
- Tabloda bulunacak her satır için bir "Satış Adetini Düzenle" tusu en son kolonda bulunmali
- Satış Adetini Düzenle tuşuna basınca, düzenleme için bir modal açılmalı
  - Açılan modal da bulunacak bir formda:
    - Hangi ürünü düzenlediğimizi anlayabilmek için ürünün title'ı ve Idsi yazmalı
    - Satış adetini girebileceğimiz bir input bulunmalı
    - Açıklama girebileceğimiz bir input (textarea) bulunmalı
    - Daha önce bu ürün için bu bilgiler kaydedilmişse; daha önceki bilgileri modaldaki formda görmeli ve düzenleyebilmeliyiz
    - Modal ın en altında bulunacak Kaydet tuşu ile bu bilgiler kaydedilince modal kapanmalı
    - Modal kapanınca, tablodaki 'Satış' alanında, modaldaki forma yazılmış olan sayı görünmeli.
      - Dolayısıyla tabloda tablo datasının yanı sıra Satış Sayısı kolonu da bulunmalı
    - Modaldaki Açıklama alanına kaydedilen yazı, tablodaki satış adeti üzerine (fare imleci ile) gelince popover veya tooltip olarak görünmeli
    - Satış Sayısı ve Açıklama bilgileri bir API aracılığı ile database e kaydedilmeyeceği için sadece hafızada (geçici) kayıtlı kalabilir. Fakat sayfa kapatılmadığı/yenilenmediği sürece kaydedilen bilgileri görebilmeliyiz

## Projeyi geliştirken
- Herhangi bir Angular boilerplate / hazır template proje kullanmayın. Angular CLI ile projeyi ve componentleri yaratabilirsiniz.
  - Angular CLI dokümantasyonu için: https://angular.io/cli
- Tablo, modal, tooltip, popover gibi elemanlari Ng Zorro veya Angular Material kütüphanelerinden kullanın
  - NG Zorro komponentlerini kullanmaya karar verirseniz, aşağıdaki komponentler proje için gerekli olacaktır:
    - NG Zorro Tablo https://ng.ant.design/components/table/en
    - NG Zorro Modal https://ng.ant.design/components/modal/en
    - NG Zorro Popover https://ng.ant.design/components/popover/en
    - NG Zorro Form ve Input https://ng.ant.design/components/form/en ve https://ng.ant.design/components/input/en
  - Angular Material komponentlerini kullanmaya karar verirseniz, aşağıdaki komponentler proje için gerekli olacaktır:
   - Angular Material Tablo https://material.angular.io/components/table/overview
   - Angular Material Dialog https://material.angular.io/components/dialog/overview
   - Angular Material Tooltip https://material.angular.io/components/tooltip/overview
   - Angular Material Form ve Inputlari https://material.angular.io/components/input/overview


## Bunlara da dikkat edin
- Takıldığınız ya da anlamadığınız bir şey olduğunda mail veya Slack aracılığı ile iletişim kurun, sorunuzu sorun.
  - İletişim proje geliştirmenin anahtarıdır.
- Angular ve kullanacağınız komponent kütüphanesinin örneklerinden ve dokümantasyonundan yararlanın
- Geliştirdiğiniz kodlari yaratacağınız bir branch e commitleyin ve işiniz bitince (master a karşı) PR açın.
  - Git kullanmayı bilmiyorsanız https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners
  - Git ile ilgili sorularınız olursa sorun.
- Projeyi Angular CLI ile yaratın. https://angular.io/cli
- Mümkün oldukça komponent ve ihtiyaç duyacağınız diğer dosyaları da Angular CLI ile oluşturun (ng generate)
- Elinizden geldikçe Angular Style Guide a uymaya çalışın https://angular.io/guide/styleguide