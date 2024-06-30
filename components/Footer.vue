<template>
  <div class="footer-contain justify-content-center">
    <NuxtLink to="/" class="dropdown-brand">
      <img src="../assets/images/logo-img.png" alt="" />
    </NuxtLink>
    <div class="  justify-content-center mt-5">
      <ul
        class="navbar-nav footer-links  "
      >
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link text-black" aria-current="page"
            >الرئيسية</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link text-black">عن المنصة</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link text-black">الاسئلة الشائعة</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link text-black"
            >الشروط والاحكام</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link text-black"
            >اتصل بنا</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.footer-contain {
  padding: 75px 0px;
  text-align: center;
  justify-items: center;
  align-items: center;
  position: relative;
}

.footer-contain::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 1px;
  background-color: #3e3e3e31;
  width: 80%;
}

.footer-links {
    direction: rtl;
    width: 50%;
    margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0rem; 
  padding: 0;
  list-style: none;
  text-align: center;
  align-items: center;
  align-content: center;
}

.footer-links .nav-item {
  margin: 0;
}

/* Media query for larger screens */
@media (min-width: 768px) {
  .footer-links {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
