<template>
    <div class="welcome-container">
        <div class="text-container">
            <div>{{ $t("welcomeView.text1") }}</div>
            <div class="title">Robert Cmrečki</div>
            <br />
            <div>{{ $t("welcomeView.text2") }}</div>
            <div class="text-more">
                <router-link :to="{ name: 'portfolio' }">
                    {{ $t("welcomeView.text3.1") }}<span>{{ $t("welcomeView.text3." + (this.$myGlobalVariable.windowWidth < this.$myGlobalVariable.mobileWindowWidth ? "2" : "3")) }}</span></router-link
                >
            </div>
        </div>
    </div>
</template>
