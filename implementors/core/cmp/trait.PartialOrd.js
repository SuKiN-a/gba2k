(function() {var implementors = {};
implementors["gba2k"] = [{"text":"impl PartialOrd&lt;<a class=\"struct\" href=\"gba2k/bios/struct.BitUnpackInfo.html\" title=\"struct gba2k::bios::BitUnpackInfo\">BitUnpackInfo</a>&gt; for <a class=\"struct\" href=\"gba2k/bios/struct.BitUnpackInfo.html\" title=\"struct gba2k::bios::BitUnpackInfo\">BitUnpackInfo</a>","synthetic":false,"types":["gba2k::bios::x10::BitUnpackInfo"]},{"text":"impl PartialOrd&lt;<a class=\"struct\" href=\"gba2k/bios/struct.BitUnpackOffset.html\" title=\"struct gba2k::bios::BitUnpackOffset\">BitUnpackOffset</a>&gt; for <a class=\"struct\" href=\"gba2k/bios/struct.BitUnpackOffset.html\" title=\"struct gba2k::bios::BitUnpackOffset\">BitUnpackOffset</a>","synthetic":false,"types":["gba2k::bios::x10::BitUnpackOffset"]},{"text":"impl PartialOrd&lt;<a class=\"struct\" href=\"gba2k/interrupts/struct.IrqBits.html\" title=\"struct gba2k::interrupts::IrqBits\">IrqBits</a>&gt; for <a class=\"struct\" href=\"gba2k/interrupts/struct.IrqBits.html\" title=\"struct gba2k::interrupts::IrqBits\">IrqBits</a>","synthetic":false,"types":["gba2k::interrupts::IrqBits"]},{"text":"impl PartialOrd&lt;<a class=\"struct\" href=\"gba2k/keys/struct.KeyInput.html\" title=\"struct gba2k::keys::KeyInput\">KeyInput</a>&gt; for <a class=\"struct\" href=\"gba2k/keys/struct.KeyInput.html\" title=\"struct gba2k::keys::KeyInput\">KeyInput</a>","synthetic":false,"types":["gba2k::keys::key_input::KeyInput"]},{"text":"impl PartialOrd&lt;<a class=\"struct\" href=\"gba2k/keys/struct.KeyChanges.html\" title=\"struct gba2k::keys::KeyChanges\">KeyChanges</a>&gt; for <a class=\"struct\" href=\"gba2k/keys/struct.KeyChanges.html\" title=\"struct gba2k::keys::KeyChanges\">KeyChanges</a>","synthetic":false,"types":["gba2k::keys::key_input::KeyChanges"]},{"text":"impl PartialOrd&lt;<a class=\"struct\" href=\"gba2k/keys/struct.KeyControl.html\" title=\"struct gba2k::keys::KeyControl\">KeyControl</a>&gt; for <a class=\"struct\" href=\"gba2k/keys/struct.KeyControl.html\" title=\"struct gba2k::keys::KeyControl\">KeyControl</a>","synthetic":false,"types":["gba2k::keys::key_control::KeyControl"]},{"text":"impl PartialOrd&lt;<a class=\"struct\" href=\"gba2k/video/mode3/struct.Mode3.html\" title=\"struct gba2k::video::mode3::Mode3\">Mode3</a>&gt; for <a class=\"struct\" href=\"gba2k/video/mode3/struct.Mode3.html\" title=\"struct gba2k::video::mode3::Mode3\">Mode3</a>","synthetic":false,"types":["gba2k::video::mode3::Mode3"]},{"text":"impl PartialOrd&lt;<a class=\"struct\" href=\"gba2k/video/mode3/struct.Mode3Scanlines.html\" title=\"struct gba2k::video::mode3::Mode3Scanlines\">Mode3Scanlines</a>&gt; for <a class=\"struct\" href=\"gba2k/video/mode3/struct.Mode3Scanlines.html\" title=\"struct gba2k::video::mode3::Mode3Scanlines\">Mode3Scanlines</a>","synthetic":false,"types":["gba2k::video::mode3::Mode3Scanlines"]},{"text":"impl PartialOrd&lt;<a class=\"struct\" href=\"gba2k/video/struct.Color.html\" title=\"struct gba2k::video::Color\">Color</a>&gt; for <a class=\"struct\" href=\"gba2k/video/struct.Color.html\" title=\"struct gba2k::video::Color\">Color</a>","synthetic":false,"types":["gba2k::video::color::Color"]},{"text":"impl PartialOrd&lt;<a class=\"struct\" href=\"gba2k/video/struct.DisplayControl.html\" title=\"struct gba2k::video::DisplayControl\">DisplayControl</a>&gt; for <a class=\"struct\" href=\"gba2k/video/struct.DisplayControl.html\" title=\"struct gba2k::video::DisplayControl\">DisplayControl</a>","synthetic":false,"types":["gba2k::video::display_control::DisplayControl"]},{"text":"impl PartialOrd&lt;<a class=\"enum\" href=\"gba2k/video/enum.VideoMode.html\" title=\"enum gba2k::video::VideoMode\">VideoMode</a>&gt; for <a class=\"enum\" href=\"gba2k/video/enum.VideoMode.html\" title=\"enum gba2k::video::VideoMode\">VideoMode</a>","synthetic":false,"types":["gba2k::video::display_control::VideoMode"]},{"text":"impl PartialOrd&lt;<a class=\"struct\" href=\"gba2k/video/struct.DisplayStatus.html\" title=\"struct gba2k::video::DisplayStatus\">DisplayStatus</a>&gt; for <a class=\"struct\" href=\"gba2k/video/struct.DisplayStatus.html\" title=\"struct gba2k::video::DisplayStatus\">DisplayStatus</a>","synthetic":false,"types":["gba2k::video::display_status::DisplayStatus"]}];
implementors["voladdress"] = [{"text":"impl&lt;T:&nbsp;PartialOrd, R:&nbsp;PartialOrd, W:&nbsp;PartialOrd&gt; PartialOrd&lt;<a class=\"struct\" href=\"voladdress/struct.VolAddress.html\" title=\"struct voladdress::VolAddress\">VolAddress</a>&lt;T, R, W&gt;&gt; for <a class=\"struct\" href=\"voladdress/struct.VolAddress.html\" title=\"struct voladdress::VolAddress\">VolAddress</a>&lt;T, R, W&gt;","synthetic":false,"types":["voladdress::voladdress_::VolAddress"]},{"text":"impl&lt;T:&nbsp;PartialOrd, R:&nbsp;PartialOrd, W:&nbsp;PartialOrd, const C:&nbsp;usize&gt; PartialOrd&lt;<a class=\"struct\" href=\"voladdress/struct.VolBlock.html\" title=\"struct voladdress::VolBlock\">VolBlock</a>&lt;T, R, W, C&gt;&gt; for <a class=\"struct\" href=\"voladdress/struct.VolBlock.html\" title=\"struct voladdress::VolBlock\">VolBlock</a>&lt;T, R, W, C&gt;","synthetic":false,"types":["voladdress::volblock::VolBlock"]},{"text":"impl&lt;T:&nbsp;PartialOrd, R:&nbsp;PartialOrd, W:&nbsp;PartialOrd, const C:&nbsp;usize, const S:&nbsp;usize&gt; PartialOrd&lt;<a class=\"struct\" href=\"voladdress/struct.VolSeries.html\" title=\"struct voladdress::VolSeries\">VolSeries</a>&lt;T, R, W, C, S&gt;&gt; for <a class=\"struct\" href=\"voladdress/struct.VolSeries.html\" title=\"struct voladdress::VolSeries\">VolSeries</a>&lt;T, R, W, C, S&gt;","synthetic":false,"types":["voladdress::volseries::VolSeries"]},{"text":"impl PartialOrd&lt;<a class=\"struct\" href=\"voladdress/struct.Safe.html\" title=\"struct voladdress::Safe\">Safe</a>&gt; for <a class=\"struct\" href=\"voladdress/struct.Safe.html\" title=\"struct voladdress::Safe\">Safe</a>","synthetic":false,"types":["voladdress::Safe"]},{"text":"impl PartialOrd&lt;<a class=\"struct\" href=\"voladdress/struct.Unsafe.html\" title=\"struct voladdress::Unsafe\">Unsafe</a>&gt; for <a class=\"struct\" href=\"voladdress/struct.Unsafe.html\" title=\"struct voladdress::Unsafe\">Unsafe</a>","synthetic":false,"types":["voladdress::Unsafe"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()