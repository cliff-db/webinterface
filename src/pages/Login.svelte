
<script>
</script>

<main>
    <h1>Administrative Login</h1>
    <form id="login">
        <div>
            <input class="username-input" type="text" placeholder="Username"/>
        </div>
        <div>
            <input class="password-input" type="password" placeholder="Password" />
        </div>
        <div>
            <input class="submit-button" type="submit" value="Log In"/>
        </div>
    </form>
</main>

<style type="text/scss">
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #f19066;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

</style>
