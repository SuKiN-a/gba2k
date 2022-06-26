(function() {var implementors = {};
implementors["gba2k"] = [{"text":"impl Send for <a class=\"struct\" href=\"gba2k/bios/struct.BitUnpackInfo.html\" title=\"struct gba2k::bios::BitUnpackInfo\">BitUnpackInfo</a>","synthetic":true,"types":["gba2k::bios::x10::BitUnpackInfo"]},{"text":"impl Send for <a class=\"struct\" href=\"gba2k/bios/struct.BitUnpackOffset.html\" title=\"struct gba2k::bios::BitUnpackOffset\">BitUnpackOffset</a>","synthetic":true,"types":["gba2k::bios::x10::BitUnpackOffset"]},{"text":"impl Send for <a class=\"struct\" href=\"gba2k/interrupts/struct.IrqBits.html\" title=\"struct gba2k::interrupts::IrqBits\">IrqBits</a>","synthetic":true,"types":["gba2k::interrupts::IrqBits"]},{"text":"impl Send for <a class=\"struct\" href=\"gba2k/keys/struct.KeysLowActive.html\" title=\"struct gba2k::keys::KeysLowActive\">KeysLowActive</a>","synthetic":true,"types":["gba2k::keys::keys_low_active::KeysLowActive"]},{"text":"impl Send for <a class=\"struct\" href=\"gba2k/keys/struct.KeyControl.html\" title=\"struct gba2k::keys::KeyControl\">KeyControl</a>","synthetic":true,"types":["gba2k::keys::key_control::KeyControl"]},{"text":"impl Send for <a class=\"struct\" href=\"gba2k/keys/struct.Keys.html\" title=\"struct gba2k::keys::Keys\">Keys</a>","synthetic":true,"types":["gba2k::keys::Keys"]},{"text":"impl Send for <a class=\"struct\" href=\"gba2k/video/struct.Color.html\" title=\"struct gba2k::video::Color\">Color</a>","synthetic":true,"types":["gba2k::video::color::Color"]},{"text":"impl Send for <a class=\"struct\" href=\"gba2k/video/struct.DisplayControl.html\" title=\"struct gba2k::video::DisplayControl\">DisplayControl</a>","synthetic":true,"types":["gba2k::video::display_control::DisplayControl"]},{"text":"impl Send for <a class=\"enum\" href=\"gba2k/video/enum.DisplayMode.html\" title=\"enum gba2k::video::DisplayMode\">DisplayMode</a>","synthetic":true,"types":["gba2k::video::display_control::DisplayMode"]},{"text":"impl Send for <a class=\"struct\" href=\"gba2k/video/struct.DisplayStatus.html\" title=\"struct gba2k::video::DisplayStatus\">DisplayStatus</a>","synthetic":true,"types":["gba2k::video::display_status::DisplayStatus"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"gba2k/interrupts/trait.GbaCellSafe.html\" title=\"trait gba2k::interrupts::GbaCellSafe\">GbaCellSafe</a>&gt; Send for <a class=\"struct\" href=\"gba2k/interrupts/struct.GbaCell.html\" title=\"struct gba2k::interrupts::GbaCell\">GbaCell</a>&lt;T&gt;","synthetic":false,"types":["gba2k::interrupts::gba_cell::GbaCell"]}];
implementors["voladdress"] = [{"text":"impl&lt;T, R, W&gt; Send for <a class=\"struct\" href=\"voladdress/struct.VolAddress.html\" title=\"struct voladdress::VolAddress\">VolAddress</a>&lt;T, R, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Send,&nbsp;</span>","synthetic":true,"types":["voladdress::voladdress_::VolAddress"]},{"text":"impl&lt;T, R, W, const C:&nbsp;usize&gt; Send for <a class=\"struct\" href=\"voladdress/struct.VolBlock.html\" title=\"struct voladdress::VolBlock\">VolBlock</a>&lt;T, R, W, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Send,&nbsp;</span>","synthetic":true,"types":["voladdress::volblock::VolBlock"]},{"text":"impl&lt;T, R, W&gt; Send for <a class=\"struct\" href=\"voladdress/struct.VolBlockIter.html\" title=\"struct voladdress::VolBlockIter\">VolBlockIter</a>&lt;T, R, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Send,&nbsp;</span>","synthetic":true,"types":["voladdress::volblock::VolBlockIter"]},{"text":"impl&lt;T, R, W, const C:&nbsp;usize, const S:&nbsp;usize&gt; Send for <a class=\"struct\" href=\"voladdress/struct.VolSeries.html\" title=\"struct voladdress::VolSeries\">VolSeries</a>&lt;T, R, W, C, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Send,&nbsp;</span>","synthetic":true,"types":["voladdress::volseries::VolSeries"]},{"text":"impl&lt;T, R, W, const S:&nbsp;usize&gt; Send for <a class=\"struct\" href=\"voladdress/struct.VolSeriesIter.html\" title=\"struct voladdress::VolSeriesIter\">VolSeriesIter</a>&lt;T, R, W, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Send,&nbsp;</span>","synthetic":true,"types":["voladdress::volseries::VolSeriesIter"]},{"text":"impl Send for <a class=\"struct\" href=\"voladdress/struct.Safe.html\" title=\"struct voladdress::Safe\">Safe</a>","synthetic":true,"types":["voladdress::Safe"]},{"text":"impl Send for <a class=\"struct\" href=\"voladdress/struct.Unsafe.html\" title=\"struct voladdress::Unsafe\">Unsafe</a>","synthetic":true,"types":["voladdress::Unsafe"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()