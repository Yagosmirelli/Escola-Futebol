from PIL import Image, ImageFilter
import sys

def create_wide_banner(input_path, output_path):
    try:
        # Open original image
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        orig_w, orig_h = img.size
        
        target_h = min(orig_h, 800) # cap height
        target_w = int(target_h * 16 / 9)
        
        # Resize original image to fit target height if needed
        if orig_h > target_h:
            ratio = target_h / orig_h
            new_w = int(orig_w * ratio)
            img = img.resize((new_w, target_h), Image.Resampling.LANCZOS)
        else:
            new_w = orig_w
            target_h = orig_h
            target_w = int(target_h * 16 / 9)
            
        # Create a background image
        bg = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
        bg = bg.filter(ImageFilter.GaussianBlur(radius=50))
        
        # Dark overlay
        dark_layer = Image.new('RGBA', bg.size, (0, 0, 0, 100))
        bg = Image.alpha_composite(bg.convert("RGBA"), dark_layer)
        
        paste_x = (target_w - new_w) // 2
        paste_y = 0
        
        bg.paste(img, (paste_x, paste_y), img)
        
        bg.convert("RGB").save(output_path, "JPEG", quality=90)
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    create_wide_banner(sys.argv[1], sys.argv[2])
