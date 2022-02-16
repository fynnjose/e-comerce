export default function ToolBarLeft() {
    return (
        <div class="b_left">
            <div class="menu split">
                <div class="icon">
                    <span></span><span></span><span></span>
                </div>
                <div class="selections">
                    <select name="categories" id="category">
                        <option value="">SELECT CATEGORY</option>
                        <option value="diery">
                            diery
                        </option>
                        <option value="freshfruits">
                            fresh Fruits
                        </option>
                        <option value="freshvegetable">
                            fresh Vegetable
                        </option>
                        <option value="freshmeat">
                            fresh Meat
                        </option>
                    </select>
                </div>
            </div>
        </div>

    );
}