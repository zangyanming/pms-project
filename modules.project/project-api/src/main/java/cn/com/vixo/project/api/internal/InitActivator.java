package cn.com.vixo.project.api.internal;
import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import cn.com.rexen.core.util.SystemUtil;

/**
 * Created by zangyanming on 2016/3/21.
 */
public class InitActivator implements BundleActivator {
    private static final String BUNDLE_NAME = " Pms Projects API ";
    private static BundleContext context;

    /**
     * Called when this bundle is started so the Framework can perform the
     * bundle-specific activities necessary to start this bundle. This method
     * can be used to register services or to allocate any resources that this
     * bundle needs.
     * <p>
     * <p>
     * This method must complete and return to its caller in a timely manner.
     *
     * @param bundleContext The execution context of the bundle being started.
     * @throws Exception If this method throws an exception, this bundle is
     *                   marked as stopped and the Framework will remove this bundle's
     *                   listeners, unregister all services registered by this bundle, and
     *                   release all services used by this bundle.
     */
    @Override
    public void start(BundleContext bundleContext) throws Exception {
        SystemUtil.succeedPrintln(String.format("Start-up %s bundle!!", BUNDLE_NAME) + bundleContext.getBundle());
        context = bundleContext;
    }

    /**
     * Called when this bundle is stopped so the Framework can perform the
     * bundle-specific activities necessary to stop the bundle. In general, this
     * method should undo the work that the {@code BundleActivator.start} method
     * started. There should be no active threads that were started by this
     * bundle when this bundle returns. A stopped bundle must not call any
     * Framework objects.
     * <p>
     * <p>
     * This method must complete and return to its caller in a timely manner.
     *
     * @param bundleContext The execution context of the bundle being stopped.
     * @throws Exception If this method throws an exception, the bundle is still
     *                   marked as stopped, and the Framework will remove the bundle's
     *                   listeners, unregister all services registered by the bundle, and
     *                   release all services used by the bundle.
     */
    @Override
    public void stop(BundleContext bundleContext) throws Exception {
        SystemUtil.succeedPrintln(String.format("Stop %s bundle!!", BUNDLE_NAME) + bundleContext.getBundle());
        context = null;
    }
}
