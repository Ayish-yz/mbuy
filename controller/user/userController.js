const pageNotFound = async (req, res) => {
    try {
        // Render the 404 page
        res.render("page");
    } catch (error) {
        console.error("Error rendering page.404:", error);
        // Handle any rendering errors with a 500 response
        res.status(500).send("An error occurred while rendering the 404 page.");
    }
};



const loadHomepage = async (req,res)=>{
    try {
        return res.render("home");
    } catch (error) {
        console.log("Home page not found");
        res.status(500).send("Server Error")
        
    }
}

module.exports = {
    loadHomepage,
    pageNotFound,
}