
<footer>
    <?php 
    $args = array(
        "theme_location"=>"header-menu",
        "container"=> "nav",
        "after"=>"<span class='separator'> | </span>"
    );
    wp_nav_menu( $args );

    ?>
    <div class="location">
            <p> Nehruova No.59, 11 000 Belgrade, Serbia</p>
            <p>Phone Number: +123-456-789</p>
            <p class="copyright">All Rights Received <?php echo date("Y"); ?></p>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>